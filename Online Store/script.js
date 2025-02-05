const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

document.querySelectorAll(".icon").forEach(img => {
  let originalSrc = img.src;
  let hoverSrc = img.getAttribute("data-hover");

  img.addEventListener("mouseover", () => fadeSwap(img, hoverSrc));
  img.addEventListener("mouseout", () => fadeSwap(img, originalSrc));
});

function fadeSwap(img, newSrc) {
  img.style.opacity = 0;
  setTimeout(() => {
      img.src = newSrc;
      img.style.opacity = 1;
  }, 150);
}