(function () {
  const header = document.querySelector(".site-header");
  const btn = document.querySelector("[data-nav-toggle]");
  const panelId = btn?.getAttribute("aria-controls");
  const panel = panelId ? document.getElementById(panelId) : null;

  if (!header || !btn || !panel) return;

  function setOpen(next) {
    header.setAttribute("data-open", next ? "true" : "false");
    btn.setAttribute("aria-expanded", next ? "true" : "false");
    panel.hidden = !next;
  }

  // init
  setOpen(false);

  btn.addEventListener("click", () => {
    const isOpen = header.getAttribute("data-open") === "true";
    setOpen(!isOpen);
  });

  // close on link click
  panel.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) setOpen(false);
  });

  // close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();
