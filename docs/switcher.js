/* Design switcher bar, added to every page by build.sh (not part of the shop itself).
   Add ?preview to a page URL to hide it (used for the picker's preview pictures). */
(function () {
  if (/[?&]preview\b/.test(location.search)) return;
  const PAGES = [
    { href: "original.html", label: "Original" },
    { href: "design-a.html", label: "Design A" },
    { href: "design-b.html", label: "Design B" },
    { href: "whatsapp-demo.html", label: "WhatsApp demo" },
  ];
  const here = location.pathname.split("/").pop();

  const style = document.createElement("style");
  style.textContent = `
    .dsw { background: #211C1C; color: #fff; font: 500 16px/1.2 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      padding: 8px 16px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px 10px; }
    .dsw a { color: #fff; text-decoration: none; display: inline-flex; align-items: center; min-height: 40px; padding: 0 14px;
      border: 1px solid rgba(255,255,255,.35); border-radius: 999px; white-space: nowrap; }
    .dsw a:hover { border-color: #fff; }
    .dsw a[aria-current="page"] { background: #fff; color: #211C1C; border-color: #fff; font-weight: 700; }
    .dsw a:focus-visible { outline: 3px solid #7FB4FF; outline-offset: 2px; }
    .dsw .dsw-home { border-color: transparent; text-decoration: underline; text-underline-offset: 3px; }
    .dsw .dsw-lbl { opacity: .75; }
    @media (max-width: 640px) { .dsw .dsw-lbl { display: none; } .dsw { font-size: 15px; gap: 6px; } .dsw a { padding: 0 11px; } }
  `;
  document.head.appendChild(style);

  const bar = document.createElement("nav");
  bar.className = "dsw";
  bar.setAttribute("aria-label", "Switch design");
  const home = document.createElement("a");
  home.className = "dsw-home"; home.href = "./"; home.textContent = "← All designs";
  const lbl = document.createElement("span");
  lbl.className = "dsw-lbl"; lbl.textContent = "Switch design:";
  bar.append(home, lbl);
  PAGES.forEach(p => {
    const a = document.createElement("a");
    a.href = p.href; a.textContent = p.label;
    if (p.href === here) a.setAttribute("aria-current", "page");
    bar.appendChild(a);
  });
  document.body.prepend(bar);
})();
