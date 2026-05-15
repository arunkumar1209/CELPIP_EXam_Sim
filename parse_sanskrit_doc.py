#!/usr/bin/env python3
"""
Parser for Valmiki Ramayana prose pages on sanskritdocuments.org.

Usage:
    python3 parse_sanskrit_doc.py <url> [--output json|text|passage]

Examples:
    python3 parse_sanskrit_doc.py \
        https://sanskritdocuments.org/sites/valmikiramayan/ayodhya/sarga119/ayodhya_119_prose.htm
    python3 parse_sanskrit_doc.py \
        https://sanskritdocuments.org/sites/valmikiramayan/ayodhya/sarga119/ayodhya_119_prose.htm \
        --output passage
"""

import sys
import json
import re
import argparse
import requests
from bs4 import BeautifulSoup, NavigableString

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
}

# Devanagari Unicode range: U+0900–U+097F
_DEVANAGARI_RE = re.compile(r"[ऀ-ॿ]")


def fetch(url: str) -> str:
    resp = requests.get(url, headers=HEADERS, timeout=20)
    resp.raise_for_status()
    # Many Sanskrit document pages are ISO-8859-1 or UTF-8; let requests detect it
    resp.encoding = resp.apparent_encoding
    return resp.text


def _clean(text: str) -> str:
    """Collapse whitespace and strip."""
    return re.sub(r"\s+", " ", text).strip()


def _has_devanagari(text: str) -> bool:
    return bool(_DEVANAGARI_RE.search(text))


def _classify(text: str) -> str:
    """Return 'sanskrit', 'transliteration', or 'english'."""
    if _has_devanagari(text):
        return "sanskrit"
    # Rough heuristic: transliteration lines contain diacritics common in IAST
    if re.search(r"[āīūṛṝḷṃḥṅñṭḍṇśṣ]", text, re.IGNORECASE):
        return "transliteration"
    return "english"


def parse(html: str) -> dict:
    """
    Parse a Valmiki Ramayana prose page and return a structured dict.

    Returns:
        {
            "title": str,
            "url": str,          # populated by caller
            "segments": [
                {
                    "id": int,
                    "sanskrit": str,
                    "transliteration": str,
                    "english": str,
                }
            ],
            "english_only": str  # full English prose as a single string
        }
    """
    soup = BeautifulSoup(html, "html.parser")

    # ── Title ──────────────────────────────────────────────────────────────────
    title = ""
    title_tag = soup.find("title")
    if title_tag:
        title = _clean(title_tag.get_text())

    # Also look for an <h1>/<h2> if the <title> is generic
    if not title or title.lower() in ("", "untitled"):
        for tag in soup.find_all(["h1", "h2", "h3"]):
            t = _clean(tag.get_text())
            if t:
                title = t
                break

    # ── Main content area ──────────────────────────────────────────────────────
    # Try to find the main content container.  The site uses several layouts:
    #   1. A <div id="content"> or <div class="content">
    #   2. A <table> that holds alternating language rows
    #   3. Plain <p> elements in the body
    content_root = (
        soup.find("div", id="content")
        or soup.find("div", class_=re.compile(r"content|body|text", re.I))
        or soup.find("table")
        or soup.body
        or soup
    )

    segments: list[dict] = []

    # ── Try table-based layout ─────────────────────────────────────────────────
    tables = content_root.find_all("table") if content_root else []
    used_table = False

    for table in tables:
        rows = table.find_all("tr")
        if len(rows) < 2:
            continue

        # Detect if this table has alternating Sanskrit/English rows or
        # side-by-side columns
        seg: dict = {"id": 0, "sanskrit": "", "transliteration": "", "english": ""}
        seg_id = 1

        for row in rows:
            cells = row.find_all(["td", "th"])
            cell_texts = [_clean(c.get_text()) for c in cells]

            if len(cells) == 1:
                # Single-column row — classify by content
                txt = cell_texts[0]
                if not txt:
                    if seg.get("english"):
                        seg["id"] = seg_id
                        segments.append(seg)
                        seg_id += 1
                        seg = {"id": 0, "sanskrit": "", "transliteration": "", "english": ""}
                    continue
                kind = _classify(txt)
                if kind == "sanskrit":
                    seg["sanskrit"] += (" " + txt if seg["sanskrit"] else txt)
                elif kind == "transliteration":
                    seg["transliteration"] += (" " + txt if seg["transliteration"] else txt)
                else:
                    seg["english"] += (" " + txt if seg["english"] else txt)

            elif len(cells) >= 2:
                # Two-column: likely Sanskrit | English
                left, right = cell_texts[0], cell_texts[1]
                if _has_devanagari(left) or _classify(left) in ("sanskrit", "transliteration"):
                    if _has_devanagari(left):
                        seg["sanskrit"] = left
                    else:
                        seg["transliteration"] = left
                    if right:
                        seg["english"] = right
                    if seg.get("english") or seg.get("sanskrit"):
                        seg["id"] = seg_id
                        segments.append(seg)
                        seg_id += 1
                        seg = {"id": 0, "sanskrit": "", "transliteration": "", "english": ""}
                elif _has_devanagari(right):
                    if left:
                        seg["english"] = left
                    seg["sanskrit"] = right
                    if seg.get("english") or seg.get("sanskrit"):
                        seg["id"] = seg_id
                        segments.append(seg)
                        seg_id += 1
                        seg = {"id": 0, "sanskrit": "", "transliteration": "", "english": ""}
                else:
                    # Both cells might be English or mixed — keep both
                    combined = " ".join(t for t in [left, right] if t)
                    if combined:
                        seg["english"] += (" " + combined if seg["english"] else combined)

        # Flush trailing segment
        if seg.get("english") or seg.get("sanskrit"):
            seg["id"] = seg_id
            segments.append(seg)

        if segments:
            used_table = True
            break

    # ── Fall back: paragraph-based layout ─────────────────────────────────────
    if not segments:
        all_paras = content_root.find_all(["p", "div", "td"]) if content_root else []
        seg: dict = {"id": 0, "sanskrit": "", "transliteration": "", "english": ""}
        seg_id = 1
        prev_kind: str | None = None

        for elem in all_paras:
            # Skip nested containers that will be visited recursively anyway
            if elem.find(["p", "div"]):
                continue
            txt = _clean(elem.get_text())
            if not txt:
                continue
            kind = _classify(txt)
            # When we transition from non-english → english flush a segment
            if kind == "english" and prev_kind in ("sanskrit", "transliteration") and seg.get("english") != txt:
                seg["english"] = txt
                seg["id"] = seg_id
                segments.append(seg)
                seg_id += 1
                seg = {"id": 0, "sanskrit": "", "transliteration": "", "english": ""}
                prev_kind = None
                continue
            if kind == "sanskrit":
                seg["sanskrit"] += (" " + txt if seg["sanskrit"] else txt)
            elif kind == "transliteration":
                seg["transliteration"] += (" " + txt if seg["transliteration"] else txt)
            else:
                seg["english"] += (" " + txt if seg["english"] else txt)
            prev_kind = kind

        if seg.get("english") or seg.get("sanskrit"):
            seg["id"] = seg_id
            segments.append(seg)

    # ── If still nothing, grab all visible text classified as English ──────────
    if not segments:
        all_text = _clean(soup.get_text())
        sentences = [s.strip() for s in re.split(r"(?<=[.!?])\s+", all_text) if s.strip()]
        english_sentences = [s for s in sentences if _classify(s) == "english"]
        if english_sentences:
            segments.append({
                "id": 1,
                "sanskrit": "",
                "transliteration": "",
                "english": " ".join(english_sentences),
            })

    english_only = " ".join(
        s["english"] for s in segments if s["english"]
    ).strip()

    return {
        "title": title,
        "url": "",
        "segments": segments,
        "english_only": english_only,
    }


def format_passage(result: dict) -> str:
    """Format English prose as a clean reading passage."""
    lines = []
    if result["title"]:
        lines.append(result["title"])
        lines.append("=" * len(result["title"]))
        lines.append("")

    for seg in result["segments"]:
        if seg["english"]:
            lines.append(seg["english"])
            lines.append("")

    return "\n".join(lines).strip()


def main() -> None:
    parser = argparse.ArgumentParser(description="Parse a Sanskrit document page.")
    parser.add_argument("url", help="Full URL of the .htm page to parse")
    parser.add_argument(
        "--output",
        choices=["json", "text", "passage"],
        default="json",
        help=(
            "json  – full structured output (default)\n"
            "text  – one segment per line with labels\n"
            "passage – English prose only, clean paragraphs"
        ),
    )
    args = parser.parse_args()

    print(f"Fetching: {args.url}", file=sys.stderr)
    html = fetch(args.url)

    result = parse(html)
    result["url"] = args.url

    if args.output == "json":
        print(json.dumps(result, ensure_ascii=False, indent=2))

    elif args.output == "text":
        print(f"Title: {result['title']}\n")
        for seg in result["segments"]:
            print(f"[{seg['id']}]")
            if seg["sanskrit"]:
                print(f"  Sanskrit: {seg['sanskrit'][:120]}…" if len(seg["sanskrit"]) > 120 else f"  Sanskrit: {seg['sanskrit']}")
            if seg["transliteration"]:
                print(f"  IAST:     {seg['transliteration'][:120]}…" if len(seg["transliteration"]) > 120 else f"  IAST: {seg['transliteration']}")
            if seg["english"]:
                print(f"  English:  {seg['english'][:200]}…" if len(seg["english"]) > 200 else f"  English: {seg['english']}")
            print()

    elif args.output == "passage":
        print(format_passage(result))


if __name__ == "__main__":
    main()
