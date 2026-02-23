(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.hidden = isOpen;
    });

    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        menuBtn.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  // Contact form -> generate message
  const form = document.getElementById("formContato");
  const output = document.getElementById("output");
  const outputText = document.getElementById("outputText");
  const copyBtn = document.getElementById("copyBtn");

  if (form && output && outputText) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nome = String(data.get("nome") || "").trim();
      const email = String(data.get("email") || "").trim();
      const msg = String(data.get("mensagem") || "").trim();

      const text =
`Olá! Meu nome é ${nome}.
Meu e-mail: ${email}

Preciso de ajuda com:
${msg}

Pode me orientar com um plano e orçamento?`;

      outputText.textContent = text;
      output.hidden = false;
      output.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  if (copyBtn && outputText) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(outputText.textContent || "");
        copyBtn.textContent = "Copiado!";
        setTimeout(() => (copyBtn.textContent = "Copiar"), 1200);
      } catch {
        alert("Não foi possível copiar automaticamente. Selecione e copie manualmente.");
      }
    });
  }
})();