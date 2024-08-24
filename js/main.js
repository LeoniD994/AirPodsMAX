const chooseColor = document.querySelectorAll(".choose__color-btn");
const contentItem = document.querySelectorAll(".content-item");

chooseColor.forEach(function (element) {
  element.addEventListener("click", open);
});
function open(evt) {
  const target = evt.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  // прибирання усім класу active
  chooseColor.forEach(function (item) {
    item.classList.remove("choose__color-btn--active");
  });
  // додавання класу active
  target.classList.add("choose__color-btn--active");

  // прибирання усім класу active
  contentItem.forEach(function (item) {
    item.classList.remove("content-item__active");
  });

  contentActive.forEach(function (item) {
    item.classList.add("content-item__active");
  });
}

// СКРОЛЛ
document.querySelectorAll(".menu__link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
