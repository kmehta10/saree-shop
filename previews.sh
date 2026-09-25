#!/bin/sh
# Takes the preview pictures shown on the design picker (docs/previews/*.jpg).
# Needs Google Chrome and an internet connection (the photos load from Unsplash).
set -e
cd "$(dirname "$0")"
./build.sh >/dev/null
mkdir -p docs/previews
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for page in original design-a design-b; do
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --blink-settings=preferredColorScheme=1 --window-size=1280,880 \
    --virtual-time-budget=15000 --screenshot="/tmp/saree-preview-$page.png" \
    "file://$PWD/docs/$page.html?preview" >/dev/null 2>&1
  sips -s format jpeg -s formatOptions 72 --resampleWidth 960 "/tmp/saree-preview-$page.png" --out "docs/previews/$page.jpg" >/dev/null
  rm -f "/tmp/saree-preview-$page.png"
  echo "Saved docs/previews/$page.jpg"
done
