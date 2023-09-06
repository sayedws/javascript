document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const totalPriceElement = document.getElementById("total");
  let total = 0;

  container.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("plus")) {
      updateQuantity(target, 1);
    } else if (target.classList.contains("minus")) {
      updateQuantity(target, -1);
    } else if (target.classList.contains("delete")) {
      deleteItem(target);
    } else if (target.classList.contains("like")) {
      toggleLike(target);
    }
  });

  function updateQuantity(button, change) {
    const row = button.closest("tr");
    const quantityElement = row.querySelector(".btn-cont p");
    const unitPriceElement = row.querySelector(".unitPrice");
    const priceElement = row.querySelector(".price");

    let quantity = parseInt(quantityElement.textContent) + change;
    if (quantity < 0) {
      quantity = 0;
    }

    quantityElement.textContent = quantity;
    const unitPrice = parseInt(unitPriceElement.textContent);
    const price = quantity * unitPrice;
    priceElement.textContent = price;

    updateTotalPrice();
  }

  function deleteItem(button) {
    const row = button.closest("tr");

    if (row) {
      const quantityElement = row.querySelector(".btn-cont p");
      const priceElement = row.querySelector(".price");

      const quantity = parseInt(quantityElement.textContent);
      const price = parseInt(priceElement.textContent);

      total -= price;
      quantityElement.textContent = 0;
      priceElement.textContent = 0;

      updateTotalPrice();

      row.style.display = "none";
      alert("item deleted");
    }
  }

  function toggleLike(button) {
    button.classList.toggle("liked");
  }

  function updateTotalPrice() {
    const allPrices = document.querySelectorAll(".price");
    total = Array.from(allPrices).reduce((sum, priceElement) => {
      return sum + parseInt(priceElement.textContent);
    }, 0);

    totalPriceElement.textContent = total;
  }
  function liked() {
    var buttons = document.querySelectorAll(".like");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        if (button.style.backgroundColor === "red") {
          button.style.backgroundColor = "white";
        } else {
          button.style.backgroundColor = "red";
        }
      });
    });
  }
  liked();
});