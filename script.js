const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight / 1.2;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) section.classList.add("visible");
    else section.classList.remove("visible");
  });
});
window.dispatchEvent(new Event("scroll"));

const form = document.getElementById("contact-form");
form.addEventListener("submit", async e => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { "Accept": "application/json" }
  });
  if (response.ok) {
    alert("Thanks for your message! I'll get back to you soon.");
    form.reset();
  } else {
    alert("Oops! Something went wrong.");
  }
});