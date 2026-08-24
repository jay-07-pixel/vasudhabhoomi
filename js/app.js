(function () {
  const body = document.body;
  const saved = localStorage.getItem("vb-lang") || "en";
  setLang(saved);

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  function setMenu(open) {
    nav.classList.toggle("open", open);
    body.classList.toggle("menu-open", open);
    menuBtn?.setAttribute("aria-expanded", String(open));
  }

  menuBtn?.addEventListener("click", () => {
    setMenu(!nav.classList.contains("open"));
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) setMenu(false);
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.tab;
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(id)?.classList.add("active");
    });
  });

  document.querySelectorAll(".acc-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const open = item.classList.contains("open");
      document.querySelectorAll(".acc-item").forEach((el) => el.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
  });

  const header = document.querySelector(".header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 16);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const revealItems = document.querySelectorAll(
    ".stat, .photo-stack, .card, .mini, .pack-frame, .gallery img, .section-title, .product-name, .acc-item, .contact-card, .map-wrap, .note"
  );
  revealItems.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 5) * 0.08}s`;
  });

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealItems.forEach((el) => io.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("in"));
  }

  function setLang(lang) {
    body.classList.remove("lang-en", "lang-mr");
    body.classList.add(lang === "mr" ? "lang-mr" : "lang-en");
    body.lang = lang === "mr" ? "mr" : "en";
    localStorage.setItem("vb-lang", lang);
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }
})();
