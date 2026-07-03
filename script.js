const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector("button[type='submit']");
  submitBtn.disabled = true;
  formStatus.textContent = "Sending...";
  formStatus.className = "form-status";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      formStatus.textContent = "Thanks! Your message has been sent.";
      formStatus.className = "form-status success";
      contactForm.reset();
    } else {
      formStatus.textContent = "Something went wrong. Please try again.";
      formStatus.className = "form-status error";
    }
  } catch (err) {
    formStatus.textContent = "Something went wrong. Please try again.";
    formStatus.className = "form-status error";
  } finally {
    submitBtn.disabled = false;
  }
});
