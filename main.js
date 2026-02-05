const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementBottom = reveals[i].getBoundingClientRect().bottom;
    const elementVisible = 100;

    if (
      elementTop < windowHeight - elementVisible &&
      elementBottom > elementVisible
    ) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
