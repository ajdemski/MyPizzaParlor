//Business Logic
function PizzaParlor(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

PizzaParlor.prototype.sizePrice = function () {
  let sizePrice = 0;
  if (this.size === "Small") {
    sizePrice += 5;
  } else if (this.size === "Medium") {
    sizePrice += 10;
  } else if (this.size === "Large") {
    sizePrice += 15;
  }
  return sizePrice;
};

PizzaParlor.prototype.toppingPrice = function () {
  let toppingPrice = this.toppings.length * 2;
  return toppingPrice;
};

PizzaParlor.prototype.totalPrice = function () {
  let sizePrice = this.sizePrice();
  let toppingPrice = this.toppingPrice();
  let totalPrice = sizePrice + toppingPrice;
  return totalPrice;
};

//UI Logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pizzaMaker");
  const pizzaPrice = document.getElementById("pizzaPrice");
  const myNewPizza = document.getElementById("myNewPizza");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const size = document.getElementById("pizzaSize").value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const toppings = Array.from(checkboxes).map((checkbox) => checkbox.value);
    const pizza = new PizzaParlor(size, toppings);

    const totalPrice = pizza.totalPrice();
    pizzaPrice.textContent = "Total Price: $" + totalPrice;
    myNewPizza.textContent = "You Ordered A " + size + " Pizza, with " + toppings.join(", ") + " Toppings";
  });
});