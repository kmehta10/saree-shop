/* ============================================================
   Shared shop data and helpers for design-a.html and design-b.html
   ============================================================ */

/* EDIT HERE: shop details */
const CONFIG = {
  shopName: "Sakhi Sarees",
  shopNameGu: "સખી સાડી",
  ownerName: "Jayshree",
  city: "Ajax",
  // WhatsApp number with country code, digits only, e.g. "14165550123".
  // Empty for the sample: buttons open WhatsApp and let you pick a contact.
  whatsapp: "",
  phoneDisplay: "+1 (000) 000-0000",
  hours: "Replies 10 am – 8 pm, every day except Tuesday",
  currency: "CAD",
  locale: "en-CA",
};

const TYPES = [
  { id: "silk", en: "Silk sarees", gu: "રેશમી સાડી" },
  { id: "gujarati", en: "Gujarati classics", gu: "ગુજરાતી પરંપરા" },
  { id: "lehenga", en: "Lehenga & chaniya choli", gu: "ચણિયા ચોળી" },
  { id: "dress", en: "Dupatta & dress material", gu: "દુપટ્ટા અને ડ્રેસ" },
];
const OCCASIONS = [
  { id: "wedding", en: "Wedding", gu: "લગ્ન" },
  { id: "festive", en: "Festive & Navratri", gu: "તહેવાર" },
  { id: "daily", en: "Everyday", gu: "રોજિંદા" },
  { id: "gift", en: "Gifting", gu: "ભેટ" },
];
const PRICE_BANDS = [
  { id: "low", en: "Under $100", test: p => p.price < 100 },
  { id: "mid", en: "$100 to $250", test: p => p.price >= 100 && p.price <= 250 },
  { id: "high", en: "Over $250", test: p => p.price > 250 },
];
const SAREE_SIZE = "5.5 m saree + 0.8 m blouse piece";

/* EDIT HERE: products.
   photo: an Unsplash photo id (sample stock photo). Replace with her own photo,
          e.g. image: "photos/s-01.jpg", and delete the photo line.
   Items with no photo use a drawing (pattern + c colours). */
const PRODUCTS = [
  { code: "S-01", type: "silk", name: "Purple silk with gold zari border", price: 285, occasions: ["wedding", "festive"], isNew: true,
    photo: "1610030469983-98e550d6193c", fabric: "Silk with zari", colours: "Purple and gold", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Deep purple with a wide gold border and a rich pallu. Looks beautiful at evening functions." },
  { code: "S-02", type: "silk", name: "Royal blue silk with mustard border", price: 240, occasions: ["festive", "wedding"], isNew: true,
    photo: "1610189013429-a703f4b245cf", fabric: "Silk with zari", colours: "Royal blue, mustard, red", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Bright royal blue with a contrast mustard and red border. A happy festival saree." },
  { code: "S-12", type: "silk", name: "Red silk with gold border", price: 270, occasions: ["wedding"], isNew: true,
    photo: "1618901185975-d59f7091bcfe", fabric: "Silk with zari", colours: "Red and gold", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Classic wedding red with a gold border. Always right for a family wedding." },
  { code: "S-05", type: "silk", name: "Black silk with rani pink border", price: 195, occasions: ["festive", "gift"], isNew: true,
    photo: "1610030469839-f909584b43f1", fabric: "Soft silk", colours: "Black and rani pink", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Elegant black with a bright pink border. Easy to style with gold or silver." },
  { code: "S-03", type: "silk", name: "Sea-green silk with zari border", price: 320, occasions: ["wedding", "gift"],
    photo: "1679006831648-7c9ea12e5807", fabric: "Silk with zari", colours: "Sea green and gold", size: SAREE_SIZE, care: "Dry clean only",
    desc: "A soft sea green that suits every skin tone, with a fine gold border." },
  { code: "S-04", type: "silk", name: "Rani pink silk with orange pallu", price: 260, occasions: ["wedding", "festive"],
    photo: "1617627143750-d86bc21e42bb", fabric: "Silk with zari", colours: "Rani pink and orange", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Pink and orange together, the way our mothers wore it. Bright and joyful." },
  { code: "S-09", type: "silk", name: "Lavender silk with gold weave", price: 230, occasions: ["wedding", "gift"],
    photo: "1641699862936-be9f49b1c38d", fabric: "Silk with zari", colours: "Lavender and gold", size: SAREE_SIZE, care: "Dry clean only",
    desc: "A gentle lavender with gold woven all through. Lovely for day weddings." },
  { code: "S-07", type: "silk", name: "Ivory silk with red border", price: 210, occasions: ["festive", "gift"],
    photo: "1678705730064-a7ecbab4b3fb", fabric: "Silk", colours: "Ivory and red", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Ivory with a red border. Perfect for pooja and festival mornings." },
  { code: "S-13", type: "silk", name: "Navy silk with pink border", price: 165, occasions: ["festive", "gift"],
    photo: "1614881064213-180b1c28f743", fabric: "Soft silk", colours: "Navy and pink", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Rich navy with a pink border. Light enough to wear all day." },
  { code: "S-08", type: "silk", name: "Navy silk with gold buttis", price: 175, occasions: ["festive"],
    photo: "1610189012906-4c0aa9b9781e", fabric: "Silk with zari", colours: "Navy, gold, orange", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Small gold motifs all over a navy body. Smart and festive." },
  { code: "S-06", type: "silk", name: "Pista green soft silk", price: 145, occasions: ["festive", "daily"],
    photo: "1609748340041-f5d61e061ebc", fabric: "Soft silk", colours: "Pista green and ivory", size: SAREE_SIZE, care: "Dry clean only",
    desc: "A fresh, light green. Soft to wear and easy to drape." },
  { code: "S-14", type: "silk", name: "Ivory saree with gold work", price: 120, occasions: ["festive", "gift"],
    photo: "1729146768775-3662af38016e", fabric: "Silk blend", colours: "Ivory and gold", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Simple ivory with gold work. Goes with any jewellery." },
  { code: "S-11", type: "silk", name: "Multicolour printed silk", price: 95, occasions: ["daily", "festive"],
    photo: "1692992193981-d3d92fabd9cb", fabric: "Printed art silk", colours: "Blue, orange and green", size: SAREE_SIZE, care: "Gentle hand wash",
    desc: "Bright prints at an everyday price. Good for kitty parties and outings." },
  { code: "S-10", type: "silk", name: "Peach printed saree", price: 85, occasions: ["daily", "gift"],
    photo: "1732709470611-670308da8c5e", fabric: "Printed silk blend", colours: "Peach and brown", size: SAREE_SIZE, care: "Gentle hand wash",
    desc: "Soft peach with small prints. Comfortable for a full day." },

  { code: "G-01", type: "gujarati", name: "Rajkot Patola silk", gu: "રાજકોટ પટોળા", price: 350, occasions: ["wedding", "gift"],
    fabric: "Pure silk, single ikat", colours: "Maroon with bottle green", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Woven in Rajkot with the classic diamond ikat. Light enough to wear all day at a wedding.",
    pattern: "patola", c: { body: "#7A1024", accent: "#1F5B3A", border: "#1F5B3A", zari: "#D9A93F", dot: "#F2D27A" } },
  { code: "G-02", type: "gujarati", name: "Jamnagari Bandhani Gajji silk", gu: "જામનગરી બાંધણી", price: 165, occasions: ["wedding", "festive"], isNew: false,
    fabric: "Gajji silk", colours: "Red with green border", size: SAREE_SIZE, care: "Dry clean only",
    desc: "Fine hand-tied bandhani from Jamnagar with a zari pallu.",
    pattern: "bandhani", c: { body: "#B3122E", accent: "#1C6B45", border: "#1C6B45", zari: "#E0B24A", dot: "#FFF3E0" } },
  { code: "G-03", type: "gujarati", name: "Gharchola with zari checks", gu: "ઘરચોળું", price: 260, occasions: ["wedding"],
    fabric: "Silk with bandhani and zari", colours: "Red and green", size: SAREE_SIZE, care: "Dry clean only",
    desc: "The traditional Gujarati wedding saree, with gold zari squares.",
    pattern: "checks", c: { body: "#B0122B", accent: "#1D6B3F", border: "#1D6B3F", zari: "#E0B24A", dot: "#F7E2A8" } },
  { code: "G-04", type: "gujarati", name: "Panetar with red bandhani border", gu: "પાનેતર", price: 225, occasions: ["wedding", "gift"],
    fabric: "Gajji silk", colours: "White with red", size: SAREE_SIZE, care: "Dry clean only",
    desc: "White body with red bandhani and a red border, worn by the bride.",
    pattern: "bandhani", c: { body: "#FBF6EE", accent: "#B0122B", border: "#B0122B", zari: "#DDB050", dot: "#B0122B" } },

  { code: "L-01", type: "lehenga", name: "Yellow and maroon lehenga", price: 340, occasions: ["wedding", "festive"], isNew: false,
    photo: "1767955694884-d4bf352c23c2", fabric: "Silk with embroidery", colours: "Yellow and maroon", size: "Skirt, blouse and dupatta. Free size, adjustable", care: "Dry clean only",
    desc: "Rich embroidery and a full flare. For sangeet, garba nights and receptions." },
  { code: "L-02", type: "lehenga", name: "Red bridal lehenga", price: 650, occasions: ["wedding"],
    photo: "1759906760638-eeffcb471e53", fabric: "Silk with heavy embroidery", colours: "Red and gold", size: "Skirt, blouse and dupatta. Made to measure", care: "Dry clean only",
    desc: "Full bridal lehenga with a matching veil. Measurements taken on a video call." },
  { code: "C-01", type: "lehenga", name: "Navratri mirror-work chaniya choli", gu: "ચણિયા ચોળી", price: 150, occasions: ["festive"],
    fabric: "Cotton with mirror work", colours: "Red, yellow and blue", size: "Skirt, blouse and dupatta. Free size, adjustable", care: "Dry clean only",
    desc: "Full flare for garba, with real mirror work and a contrast border.",
    shape: "skirt", pattern: "mirror", c: { body: "#D2233A", accent: "#F2A900", border: "#1B5E7A", zari: "#F2C14E", dot: "#F2A900" } },

  { code: "D-01", type: "dress", name: "Block-print dress material", price: 65, occasions: ["daily", "gift"],
    photo: "1623310658847-33f12eaab710", fabric: "Cotton, block printed", colours: "Many prints to choose from", size: "Top 2.5 m, bottom 2.5 m, dupatta 2.25 m", care: "Hand wash in cold water",
    desc: "Unstitched three-piece sets. Ask on WhatsApp for the prints in stock this week." },
  { code: "D-02", type: "dress", name: "Printed dupattas", price: 45, occasions: ["daily", "gift"],
    photo: "1779470703519-05af825e87cd", fabric: "Cotton and silk blends", colours: "Many colours", size: "2.5 m", care: "Gentle hand wash",
    desc: "A quick way to dress up a plain kurta. Great small gifts." },
];

/* Extra photos used for decoration (all free Unsplash photos) */
const PHOTOS = {
  zariBorder: "1588140686379-1b76a52103dc",
  pinkSilk: "1717586756136-d9a3eeb1fa6f",
  goldThread: "1773847099342-33b0381cbe0d",
  loom: "1786871204247-60f342ae81a8",
  shelf: "1722957533029-6b62a3826d05",
  hangers: "1773218373348-34db6bb11662",
  bridalDetail: "1724856605022-106d6dd6e842",
};

/* ============================================================
   Helpers
   ============================================================ */
const byCode = code => PRODUCTS.find(p => p.code === code);
const money = n => new Intl.NumberFormat(CONFIG.locale, { style: "currency", currency: CONFIG.currency, maximumFractionDigits: 0 }).format(n);
function waLink(text) {
  const n = (CONFIG.whatsapp || "").replace(/\D/g, "");
  return "https://wa.me/" + n + "?text=" + encodeURIComponent(text);
}
function catalogLink() {
  const n = (CONFIG.whatsapp || "").replace(/\D/g, "");
  return n ? "https://wa.me/c/" + n : waLink(`Namaste ${CONFIG.ownerName}! Can I see your catalog?`);
}
const orderText = p => `Namaste ${CONFIG.ownerName}! I like the ${p.name} (${p.code}, ${money(p.price)}). Is it available?`;
const videoText = p => `Namaste ${CONFIG.ownerName}! Can we do a short video call so I can see the ${p.name} (${p.code})?`;
const helloText = () => `Namaste ${CONFIG.ownerName}! I saw your sarees online and have a question.`;
const photoUrl = (id, w) => `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;

function applyConfig(root = document) {
  root.querySelectorAll("[data-config]").forEach(el => { const v = CONFIG[el.dataset.config]; if (v) el.textContent = v; });
  root.querySelectorAll('[data-wa="hello"]').forEach(a => { a.href = waLink(helloText()); });
  root.querySelectorAll('[data-wa="catalog"]').forEach(a => { a.href = catalogLink(); });
  root.querySelectorAll("[data-wa-text]").forEach(a => { a.href = waLink(a.dataset.waText.replace("{owner}", CONFIG.ownerName)); });
}

/* A photo <img>, or a drawing <canvas> when there's no photo (or the photo fails). */
function productImage(p, { sizes = "(max-width: 640px) 100vw, 33vw", ratio = [5, 6] } = {}) {
  if (p.image || p.photo) {
    const img = document.createElement("img");
    img.alt = p.name;
    img.loading = "lazy";
    img.decoding = "async";
    if (p.image) img.src = p.image;
    else {
      img.src = photoUrl(p.photo, 700);
      img.srcset = [400, 700, 1000].map(w => `${photoUrl(p.photo, w)} ${w}w`).join(", ");
      img.sizes = sizes;
    }
    img.addEventListener("error", () => img.replaceWith(drawingFor(p, ratio)), { once: true });
    return img;
  }
  return drawingFor(p, ratio);
}
function drawingFor(p, ratio) {
  const spec = p.pattern ? p : { ...p, pattern: "buti", c: { body: "#7A1024", accent: "#B8862B", border: "#B8862B", zari: "#E8C77A", dot: "#E8C77A" } };
  const cv = document.createElement("canvas");
  const W = 400, H = Math.round(W * ratio[1] / ratio[0]);
  cv.setAttribute("width", W); cv.setAttribute("height", H);
  cv.setAttribute("role", "img"); cv.setAttribute("aria-label", "Drawing of " + p.name);
  cv.className = "drawing";
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
  if (spec.shape === "skirt") drawSkirt(ctx, spec, W, H);
  else drawFold(ctx, spec, W * .1, H * .08, W * .8, H * .82);
  return cv;
}
const isSamplePhoto = p => !p.image && !!p.photo;
const isDrawing = p => !p.image && !p.photo;

/* Detail pop-up. Each page styles .dlg-* classes its own way. */
function openDetail(p) {
  let d = document.getElementById("detail");
  if (!d) {
    d = document.createElement("dialog"); d.id = "detail"; d.className = "dlg";
    d.setAttribute("aria-labelledby", "dlgTitle");
    d.innerHTML = `
      <div class="dlg-top"><button type="button" class="dlg-close" data-close>✕ Close</button></div>
      <div class="dlg-inner">
        <div class="dlg-pic"></div>
        <div class="dlg-info">
          <p class="dlg-code"></p>
          <h2 id="dlgTitle"></h2>
          <p class="dlg-gu"></p>
          <p class="dlg-price"></p>
          <p class="dlg-desc"></p>
          <dl class="dlg-facts"></dl>
          <div class="dlg-actions">
            <a class="btn btn-wa btn-block dlg-order" target="_blank" rel="noopener">Ask about this on WhatsApp</a>
            <a class="btn btn-line btn-block dlg-video" target="_blank" rel="noopener">Ask for a video call</a>
            <button class="btn btn-line btn-block" type="button" data-close>Close and keep looking</button>
          </div>
          <p class="dlg-note"></p>
        </div>
      </div>`;
    document.body.appendChild(d);
    d.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", () => d.close()));
    d.addEventListener("click", e => { if (e.target === d) d.close(); });
  }
  const pic = d.querySelector(".dlg-pic"); pic.innerHTML = "";
  pic.appendChild(productImage(p, { sizes: "(max-width: 820px) 100vw, 480px" }));
  d.querySelector(".dlg-code").textContent = "Code " + p.code;
  d.querySelector("#dlgTitle").textContent = p.name;
  const gu = d.querySelector(".dlg-gu"); gu.textContent = p.gu || ""; gu.hidden = !p.gu;
  d.querySelector(".dlg-price").textContent = money(p.price);
  d.querySelector(".dlg-desc").textContent = p.desc;
  const occ = p.occasions.map(id => OCCASIONS.find(o => o.id === id).en).join(", ");
  const dl = d.querySelector(".dlg-facts"); dl.innerHTML = "";
  [["Fabric", p.fabric], ["Size", p.size], ["Colours", p.colours], ["Good for", occ], ["Care", p.care]].forEach(([k, v]) => {
    const dt = document.createElement("dt"); dt.textContent = k;
    const dd = document.createElement("dd"); dd.textContent = v;
    dl.append(dt, dd);
  });
  d.querySelector(".dlg-order").href = waLink(orderText(p));
  d.querySelector(".dlg-video").href = waLink(videoText(p));
  d.querySelector(".dlg-note").textContent = isSamplePhoto(p) ? "Sample photo from Unsplash. Her own photo of this piece will go here."
    : isDrawing(p) ? "This is a drawing. A real photo will go here." : "";
  d.showModal();
}

function setupTextSize(btn) {
  if (!btn) return;
  const set = on => { document.documentElement.classList.toggle("big-text", on); btn.setAttribute("aria-pressed", String(on)); };
  try { set(localStorage.getItem("bigText") === "1"); } catch (e) {}
  btn.addEventListener("click", () => {
    const on = !document.documentElement.classList.contains("big-text");
    set(on);
    try { localStorage.setItem("bigText", on ? "1" : "0"); } catch (e) {}
  });
}

/* ============================================================
   Drawings (copied from page.html)
   ============================================================ */
function rr(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function dot(ctx, x, y, r, col) { ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); }
function flower(ctx, x, y, r, col, mid) {
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4; dot(ctx, x + Math.cos(a) * r * .75, y + Math.sin(a) * r * .75, r * .55, col); }
  dot(ctx, x, y, r * .38, mid || col);
}
function diamond(ctx, x, y, r, col) { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x, y - r); ctx.lineTo(x + r, y); ctx.lineTo(x, y + r); ctx.lineTo(x - r, y); ctx.closePath(); ctx.fill(); }
function each(x, y, w, h, s, fn, stagger = true) {
  let row = 0;
  for (let yy = y - s; yy < y + h + s; yy += s, row++) {
    const off = stagger && row % 2 ? s / 2 : 0;
    for (let xx = x - s + off; xx < x + w + s; xx += s) fn(xx, yy);
  }
}

function fillBody(ctx, p, x, y, w, h) {
  const c = p.c;
  ctx.fillStyle = c.body; ctx.fillRect(x, y, w, h);
  switch (p.pattern) {
    case "buti": each(x, y, w, h, 34, (a, b) => flower(ctx, a, b, 5, c.zari, c.body)); break;
    case "bandhani": each(x, y, w, h, 18, (a, b) => { for (let i = 0; i < 4; i++) { const t = i * Math.PI / 2; dot(ctx, a + Math.cos(t) * 3.2, b + Math.sin(t) * 3.2, 1.5, c.dot); } }); break;
    case "patola": each(x, y, w, h, 46, (a, b) => { diamond(ctx, a, b, 21, c.accent); diamond(ctx, a, b, 13, c.zari); diamond(ctx, a, b, 6, c.body); dot(ctx, a + 23, b, 2.2, c.dot); }, false); break;
    case "checks":
      ctx.strokeStyle = c.zari; ctx.lineWidth = 2.5;
      for (let xx = x + 8; xx < x + w; xx += 40) { ctx.beginPath(); ctx.moveTo(xx, y); ctx.lineTo(xx, y + h); ctx.stroke(); }
      for (let yy = y + 8; yy < y + h; yy += 40) { ctx.beginPath(); ctx.moveTo(x, yy); ctx.lineTo(x + w, yy); ctx.stroke(); }
      each(x + 28, y + 28, w, h, 40, (a, b) => flower(ctx, a, b, 5, c.dot, c.accent), false);
      break;
    case "leheriya": {
      ctx.save(); ctx.translate(x + w / 2, y + h / 2); ctx.rotate(-Math.PI / 4);
      const D = Math.hypot(w, h), cols = c.stripes; let i = 0;
      for (let s = -D; s < D; s += 13, i++) { ctx.fillStyle = cols[i % cols.length]; ctx.fillRect(-D, s, D * 2, 13); }
      ctx.restore(); break;
    }
    case "kota":
      ctx.strokeStyle = c.accent; ctx.globalAlpha = .28; ctx.lineWidth = 1.2;
      for (let xx = x; xx < x + w; xx += 11) { ctx.beginPath(); ctx.moveTo(xx, y); ctx.lineTo(xx, y + h); ctx.stroke(); }
      for (let yy = y; yy < y + h; yy += 11) { ctx.beginPath(); ctx.moveTo(x, yy); ctx.lineTo(x + w, yy); ctx.stroke(); }
      ctx.globalAlpha = 1;
      each(x, y, w, h, 55, (a, b) => dot(ctx, a, b, 2.5, c.zari));
      break;
    case "plain":
      ctx.fillStyle = "rgba(0,0,0,.06)"; for (let xx = x; xx < x + w; xx += 3) ctx.fillRect(xx, y, 1, h);
      ctx.fillStyle = "rgba(255,255,255,.07)"; for (let yy = y; yy < y + h; yy += 4) ctx.fillRect(x, yy, w, 1);
      break;
    case "floral": each(x, y, w, h, 58, (a, b) => {
      for (let i = 0; i < 5; i++) { const t = i * Math.PI * 2 / 5; dot(ctx, a + Math.cos(t) * 8, b + Math.sin(t) * 8, 6, c.accent); }
      dot(ctx, a, b, 4, c.zari);
    }); break;
    case "ajrakh":
      each(x, y, w, h, 36, (a, b) => {
        ctx.save(); ctx.translate(a, b); ctx.fillStyle = c.accent;
        ctx.fillRect(-8, -8, 16, 16); ctx.rotate(Math.PI / 4); ctx.fillRect(-8, -8, 16, 16); ctx.restore();
        dot(ctx, a, b, 3.5, c.zari); dot(ctx, a + 18, b + 18, 2, c.zari);
      }, false);
      break;
    case "mirror": each(x, y, w, h, 42, (a, b) => {
      for (let i = 0; i < 8; i++) { const t = i * Math.PI / 4; dot(ctx, a + Math.cos(t) * 11, b + Math.sin(t) * 11, 1.9, c.dot); }
      dot(ctx, a, b, 6.5, c.zari); dot(ctx, a, b, 4.8, "#DDE3E7"); dot(ctx, a - 1.4, b - 1.4, 1.6, "#FFFFFF");
    }); break;
  }
}

function paisley(ctx, x, y, s, col) {
  ctx.fillStyle = col; ctx.beginPath();
  ctx.moveTo(x, y - s);
  ctx.bezierCurveTo(x + s * 1.1, y - s * .4, x + s * .9, y + s, x, y + s);
  ctx.bezierCurveTo(x - s * .9, y + s, x - s * .9, y + s * .1, x - s * .1, y - s * .1);
  ctx.bezierCurveTo(x + s * .2, y - s * .4, x - s * .1, y - s * .8, x, y - s);
  ctx.fill();
}
function borderBand(ctx, c, x, y, w, h) {
  ctx.fillStyle = c.border; ctx.fillRect(x, y, w, h);
  ctx.fillStyle = c.zari;
  const t = Math.max(2, h * .07);
  ctx.fillRect(x, y + t, w, t); ctx.fillRect(x, y + h - t * 2, w, t);
  const th = h - t * 5, step = th * 1.05;
  if (th > 6) {
    for (let xx = x; xx < x + w + step; xx += step) {
      ctx.beginPath(); ctx.moveTo(xx - th * .45, y + h - t * 2.5); ctx.lineTo(xx, y + t * 2.5); ctx.lineTo(xx + th * .45, y + h - t * 2.5); ctx.closePath(); ctx.fill();
    }
  }
}
function pallu(ctx, c, x, y, w, h) {
  ctx.fillStyle = c.accent; ctx.fillRect(x, y, w, h);
  ctx.fillStyle = c.zari;
  const bands = [.1, .16, .5, .54, .86];
  bands.forEach((f, i) => ctx.fillRect(x, y + h * f, w, i === 2 ? 5 : 2.5));
  for (let xx = x + 22; xx < x + w; xx += 40) paisley(ctx, xx, y + h * .33, h * .1, c.zari);
  for (let xx = x + 12; xx < x + w; xx += 24) dot(ctx, xx, y + h * .7, 2.4, c.zari);
}
function sheen(ctx, x, y, w, h) {
  const g = ctx.createLinearGradient(x, y, x + w, y + h);
  g.addColorStop(0, "rgba(255,255,255,.18)"); g.addColorStop(.45, "rgba(255,255,255,0)"); g.addColorStop(1, "rgba(0,0,0,.16)");
  ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
}

function drawFold(ctx, p, x, y, w, h, opt = {}) {
  const withPallu = opt.pallu !== false, band = opt.band || .15;
  ctx.save();
  ctx.shadowColor = "rgba(40,20,10,.3)"; ctx.shadowBlur = opt.blur ?? 22; ctx.shadowOffsetY = opt.dy ?? 10;
  ctx.fillStyle = p.c.body; rr(ctx, x, y, w, h, 5); ctx.fill();
  ctx.restore();
  ctx.save(); rr(ctx, x, y, w, h, 5); ctx.clip();
  fillBody(ctx, p, x, y, w, h);
  const ph = withPallu ? h * .3 : 0;
  if (withPallu) pallu(ctx, p.c, x, y, w, ph);
  borderBand(ctx, p.c, x, y + h - h * band, w, h * band);
  if (withPallu) { ctx.fillStyle = "rgba(0,0,0,.18)"; ctx.fillRect(x, y + ph, w, 2); }
  const fold = ctx.createLinearGradient(x + w - 26, 0, x + w, 0);
  fold.addColorStop(0, "rgba(0,0,0,0)"); fold.addColorStop(1, "rgba(0,0,0,.2)");
  ctx.fillStyle = fold; ctx.fillRect(x + w - 26, y, 26, h);
  sheen(ctx, x, y, w, h);
  ctx.restore();
}

function drawSkirt(ctx, p, W, H) {
  const c = p.c, cx = W / 2, top = H * .16, bot = H * .9, tw = W * .34, bw = W * .86;
  const path = () => {
    ctx.beginPath();
    ctx.moveTo(cx - tw / 2, top); ctx.lineTo(cx + tw / 2, top);
    ctx.quadraticCurveTo(cx + bw * .36, H * .5, cx + bw / 2, bot);
    ctx.quadraticCurveTo(cx, bot + H * .06, cx - bw / 2, bot);
    ctx.quadraticCurveTo(cx - bw * .36, H * .5, cx - tw / 2, top);
    ctx.closePath();
  };
  ctx.save(); ctx.shadowColor = "rgba(40,20,10,.3)"; ctx.shadowBlur = 22; ctx.shadowOffsetY = 10;
  ctx.fillStyle = c.body; path(); ctx.fill(); ctx.restore();
  ctx.save(); path(); ctx.clip();
  fillBody(ctx, p, 0, top, W, H - top);
  borderBand(ctx, c, 0, bot - H * .1, W, H * .2);
  ctx.strokeStyle = "rgba(0,0,0,.16)"; ctx.lineWidth = 2;
  for (let i = -6; i <= 6; i++) { ctx.beginPath(); ctx.moveTo(cx + i * tw / 13, top); ctx.lineTo(cx + i * bw / 12, bot + 30); ctx.stroke(); }
  sheen(ctx, 0, top, W, H - top);
  ctx.restore();
  // waistband
  ctx.fillStyle = c.border; rr(ctx, cx - tw / 2 - 6, top - 14, tw + 12, 18, 4); ctx.fill();
  ctx.fillStyle = c.zari; ctx.fillRect(cx - tw / 2 - 6, top - 7, tw + 12, 3);
  // tassels
  ctx.strokeStyle = c.accent; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(cx + tw / 2 - 8, top); ctx.lineTo(cx + tw / 2 + 4, top + H * .16); ctx.stroke();
  dot(ctx, cx + tw / 2 + 4, top + H * .16 + 5, 6, c.accent);
}

