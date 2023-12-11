// Business Logic
function PizzaParlor(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

PizzaParlor.prototype.sizePrice = function () {
  let sizePrice = 0;
  if (this.size === "small") {
    sizePrice += 5;
  } else if (this.size === "medium") {
    sizePrice += 10;
  } else if (this.size === "large") {
    sizePrice += 15;
  }
  return sizePrice;
};

PizzaParlor.prototype.toppingPrice = function () {
  let toppingsPrice = this.toppings.length * 2;
  return toppingsPrice;
};

PizzaParlor.prototype.calculateTotalPrice = function () {
  let sizePrice = this.sizePrice();
  let toppingsPrice = this.toppingPrice();
  let totalPrice = sizePrice + toppingsPrice;
  return totalPrice;
};

// UI Logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pizzaMaker");
  const showPrice = document.getElementById("pizzaPrice");
  const showSize = document.getElementById("showSize");
  const showToppings = document.getElementById("showToppings");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const pizzaSize = form.elements["pizzaSize"].value;
    const pizzaToppings = form.querySelectorAll("input[type=checkbox]:checked");
    let newPizza = new PizzaParlor(pizzaSize, pizzaToppings);

    if (showSize) {
      showSize.textContent = `Size: ${pizzaSize}`;
    }
    if (showToppings) {
      showToppings.textContent = `Toppings: ${Array.from(pizzaToppings).map(topping => topping.value).join(", ")}`;
    }

    const totalPrice = newPizza.calculateTotalPrice();
    if (showPrice) {
      showPrice.textContent = `Total Price: $${totalPrice}`;
    }
  });
});