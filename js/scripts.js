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
  }
  return sizePrice;
};
