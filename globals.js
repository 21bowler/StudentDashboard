const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");

    // accessibility state update.
    hamburger.setAttribute("aria-exanded", (!isHidden).toString());
  });
}
