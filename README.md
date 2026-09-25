# saree-shop

Sample catalog website for a small saree / Gujarati-wear seller.
Audience: Indian women 40–60+ in Canada, mostly opening the link from WhatsApp on a phone.
Region: Canada. Prices in CAD, Interac e-Transfer, Canada Post or local pickup.

- Design picker (start here): https://kmehta10.github.io/saree-shop/
- Original: https://kmehta10.github.io/saree-shop/original.html
- Design A: https://kmehta10.github.io/saree-shop/design-a.html
- Design B: https://kmehta10.github.io/saree-shop/design-b.html
- WhatsApp selling walkthrough: https://kmehta10.github.io/saree-shop/whatsapp-demo.html

Owner: Jayshree. City: Ajax, Ontario.

- Status: first draft, 2026-09-24. Waiting on feedback.

## Files

| File | What it is |
|---|---|
| `page.html` | The original design (also the Artifact preview source). |
| `whatsapp-demo.html` | Click-through demo of a sale inside WhatsApp Business + setup checklist. Drawing code is copied from `page.html`. |
| `design-a.html` | Design A: photo-led boutique look (maroon and gold). Full page, uses `shop.js`. |
| `design-b.html` | Design B: owner-first home shop look (pink, peacock, big buttons). Full page, uses `shop.js`. |
| `shop.js` | Shared data for both designs: `CONFIG`, `PRODUCTS`, photos, WhatsApp links, pop-up, drawings. |
| `chooser.html` | The design picker. Becomes `docs/index.html`. |
| `switcher.js` | The dark "Switch design" bar. `build.sh` adds it to every page except the picker. Add `?preview` to a URL to hide it. |
| `build.sh` | Builds everything in `docs/`. Run after any edit. |
| `previews.sh` | Retakes the picker's preview pictures with headless Chrome (runs `build.sh` first). |
| `docs/` | Built files. This is what GitHub Pages serves. Don't edit by hand. |

## How to change things

Everything to edit is at the top of the `<script>` in `page.html`:

- `CONFIG` — shop name, owner name, WhatsApp number (digits with country code), currency, shipping text.
- `PRODUCTS` — one entry per item. Set `image: "photos/xyz.jpg"` to swap the drawing for a real photo
  (put photos in `docs/photos/`).

Then run `./build.sh`.

## Photos, reviews and dates in the designs

- Photos are free Unsplash photos, hotlinked from images.unsplash.com (Unsplash License, commercial use OK).
  They show sarees in general, not her stock. Product names describe what each photo shows.
  Replace with her own photos: set `image: "photos/x.jpg"` on a product and drop the file in `docs/photos/`.
- Reviews and the Diwali exhibition date are marked "Example". Swap in real customer messages (with permission).
- Services (fall & pico, blouse stitching from $45, petticoat, home visits) are ideas to confirm with her.

## Design choices (why it looks like this)

- Big text (18px base) plus an "A+ Bigger text" button. 48px+ tap targets. One column on phones.
- Ordering = WhatsApp with the item name and code pre-typed. No cart, no checkout, no accounts.
- "Ask for a video call" on every item. Builds trust for expensive silk.
- Gujarati labels next to English. Fonts: Rasa (headings), Mukta Vaani (body), Shrikhand (logo) — all cover Gujarati.
- Pictures are canvas drawings on purpose — no photos copied from other shops.

## WhatsApp selling (free WhatsApp Business app)

Catalog + cart: customer browses, adds to cart, sends the cart as a chat message. No payment inside
WhatsApp in Canada, so Interac e-Transfer. Orders are just chats, so she uses labels (New order / Paid /
Shipped). Broadcast lists: 256 people max, only people who saved her number. Catalog link: `wa.me/c/<number>`.

## Going live later

GitHub Pages and Vercel sites are **public** (even from a private repo). That is fine for a shop.
Push this folder to a repo, point Pages at `/docs`, or import it into Vercel.
