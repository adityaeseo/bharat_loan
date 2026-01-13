
  const faqs = [
    {
      q: "What is a payday loan from Bharat Loan?",
      a: "A payday loan is a short-term loan designed to help salaried individuals manage urgent expenses until their next salary arrival."
    },
    {
      q: "How fast can I receive the money?",
      a: "Once approved, funds are usually credited quickly, ensuring minimal waiting time in emergencies."
    },
    {
      q: "Do I need a high credit score?",
      a: "No. Payday loans primarily consider income capacity, employment, and repayment ability."
    },
    {
      q: "Can first-time borrowers apply?",
      a: "Yes. Payday loans are suitable for individuals building or starting their credit journey."
    },
    {
      q: "Is this loan suitable for long-term borrowing?",
      a: "No. Payday loans are specifically designed for short-term needs and should not be used as ongoing credit."
    },
    {
      q: "How will I know my repayment dates?",
      a: "All repayment schedules are shared before loan acceptance and reminders are sent via SMS and email."
    },
    {
      q: "Can I repay early?",
      a: "Depending on policy, early repayment may be possible. Exact terms will be stated in your agreement."
    },
    {
      q: "Are there hidden charges?",
      a: "All charges are disclosed transparently prior to approval."
    },
    {
      q: "What happens if I miss a payment?",
      a: "Late payments may attract penalties and could impact credit history, so planning repayment is critical."
    }
  ];

  const PAGE_SIZE = 3;               // initial visible FAQs like screenshot
  let visibleCount = PAGE_SIZE;

  const listEl = document.getElementById("faqList");
  const moreBtn = document.getElementById("faqMoreBtn");

  function renderFaqs() {
    listEl.innerHTML = "";

    faqs.slice(0, visibleCount).forEach((item, idx) => {
      const row = document.createElement("div");
      row.className = "bl-faq__item";
      row.innerHTML = `
        <button class="bl-faq__q" type="button" aria-expanded="false">
          <span>${item.q}</span>
          <span class="bl-faq__chev" aria-hidden="true"></span>
        </button>
        <div class="bl-faq__a" hidden>
          <p>${item.a}</p>
        </div>
      `;
      listEl.appendChild(row);
    });

    // attach toggle handlers
    listEl.querySelectorAll(".bl-faq__q").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".bl-faq__item");
        const ans = item.querySelector(".bl-faq__a");
        const isOpen = btn.getAttribute("aria-expanded") === "true";

        // close others (accordion)
        listEl.querySelectorAll(".bl-faq__q").forEach(b => b.setAttribute("aria-expanded", "false"));
        listEl.querySelectorAll(".bl-faq__a").forEach(a => a.hidden = true);

        // toggle current
        if (!isOpen) {
          btn.setAttribute("aria-expanded", "true");
          ans.hidden = false;
        }
      });
    });

    // show/hide view more
    if (visibleCount >= faqs.length) {
      moreBtn.style.display = "none";
    } else {
      moreBtn.style.display = "inline-flex";
    }
  }

  moreBtn.addEventListener("click", () => {
    visibleCount = Math.min(visibleCount + PAGE_SIZE, faqs.length);
    renderFaqs();
  });

  // initial render
  renderFaqs();
