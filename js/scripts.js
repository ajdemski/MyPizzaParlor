// Buisness Logic


function PizzaParlor(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

PizzaParlor.prototype.sizePrice = function() {
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

PizzaParlor.prototype.toppingPrice = function() {
  let toppingsPrice = this.toppings.length * 2;
  return toppingsPrice;
};

PizzaParlor.prototype.calculateTotalPrice = function () {
  let sizePrice = this.sizePrice();
  let toppingsPrice = this.toppingPrice();
  let totalPrice = sizePrice + toppingsPrice;
  return totalPrice;
};