#!/bin/sh
# Builds docs/ for GitHub Pages.
#   docs/index.html          design picker (from chooser.html)
#   docs/original.html       page.html wrapped into a full document (page.html is also the Artifact source)
#   docs/whatsapp-demo.html  whatsapp-demo.html wrapped the same way
#   docs/design-a.html, docs/design-b.html  copied as is
# Every page except the picker gets the design switcher bar (switcher.js) before </body>.
# Preview pictures for the picker come from ./previews.sh.
set -e
cd "$(dirname "$0")"
mkdir -p docs
SW='<script src="switcher.js"></script>'

wrap() {
  {
    printf '<!doctype html>\n<html lang="en">\n<head>\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    sed '/<style>/,$d' "$1"
    printf '</head>\n<body>\n'
    sed -n '/<style>/,$p' "$1"
    printf '\n%s\n</body>\n</html>\n' "$SW"
  } > "docs/$2"
  echo "Built docs/$2"
}
copy() {
  awk -v sw="$SW" '/<\/body>/ { print sw } { print }' "$1" > "docs/$1"
  echo "Built docs/$1"
}

cp chooser.html docs/index.html && echo "Built docs/index.html (picker)"
wrap page.html original.html
wrap whatsapp-demo.html whatsapp-demo.html
copy design-a.html
copy design-b.html
cp shop.js switcher.js docs/ && echo "Copied shop.js, switcher.js"
