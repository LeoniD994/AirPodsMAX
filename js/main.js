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

// Отримуємо кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Додаємо обробник події для відображення кнопки при прокручуванні сторінки
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Додаємо обробник події для натискання на кнопку
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// modal
const buyButton = document.querySelector(".menu__btn");
const backdrop = document.getElementById("backdrop");
const formContainer = document.getElementById("orderFormContainer");
const closeFormButton = document.getElementById("closeForm");
const orderSummaryContainer = document.getElementById("orderSummary");

buyButton.addEventListener("click", () => {
  backdrop.style.display = "block";
  formContainer.style.display = "block";
  orderSummaryContainer.style.display = "none";
});

backdrop.addEventListener("click", () => {
  closeForm();
});

closeFormButton.addEventListener("click", () => {
  closeForm();
});

function closeForm() {
  backdrop.style.display = "none";
  formContainer.style.display = "none";
  orderSummaryContainer.innerHTML = "";
}

document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const color = document.getElementById("color").value;
    const quantity = document.getElementById("quantity").value;

    const orderSummary = `
        <h2>Order Summary</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Color:</strong> ${color}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
    `;

    orderSummaryContainer.innerHTML = orderSummary;
    orderSummaryContainer.style.display = "block";

    setTimeout(closeForm, 3000);
  });
