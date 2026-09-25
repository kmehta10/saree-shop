#!/bin/sh
# Wraps each source page in a full HTML document for GitHub Pages / Vercel / Netlify.
# Source pages are the files to edit (the Artifact previews use them as is).
# Lines before <style> (title, meta, font links) go into <head>.
set -e
cd "$(dirname "$0")"
mkdir -p docs
wrap() {
  {
    printf '<!doctype html>\n<html lang="en">\n<head>\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    sed '/<style>/,$d' "$1"
    printf '</head>\n<body>\n'
    sed -n '/<style>/,$p' "$1"
    printf '\n</body>\n</html>\n'
  } > "docs/$2"
  echo "Built docs/$2"
}
wrap page.html index.html
wrap whatsapp-demo.html whatsapp-demo.html
