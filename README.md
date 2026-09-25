# saree-shop

Sample catalog website for a small saree / Gujarati-wear seller.
Audience: Indian women 40–60+ in Canada, mostly opening the link from WhatsApp on a phone.
Region: Canada. Prices in CAD, Interac e-Transfer, Canada Post or local pickup.

- Website: https://kmehta10.github.io/saree-shop/
- WhatsApp selling walkthrough: https://kmehta10.github.io/saree-shop/whatsapp-demo.html
- Status: first draft, 2026-09-24. Waiting on feedback.

## Files

| File | What it is |
|---|---|
| `page.html` | The one source file. Edit this. |
| `whatsapp-demo.html` | Click-through demo of a sale inside WhatsApp Business + setup checklist. Drawing code is copied from `page.html`. |
| `build.sh` | Wraps both pages into full web pages in `docs/`. |
| `docs/index.html` | Built file. This is what GitHub Pages / Vercel serves. Don't edit by hand. |

## How to change things

Everything to edit is at the top of the `<script>` in `page.html`:

- `CONFIG` — shop name, owner name, WhatsApp number (digits with country code), currency, shipping text.
- `PRODUCTS` — one entry per item. Set `image: "photos/xyz.jpg"` to swap the drawing for a real photo
  (put photos in `docs/photos/`).

Then run `./build.sh`.

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
