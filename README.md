#### _By Aaron Demski_

## Technologies Used

* _Html_
* _Css_
* _JavaScript_
* _TDD (Test-Driven-Development)_
* _VsCode_
* _GitHub_

## Description

_A Code Review Project from Aaron Demski, In this repository you'll find index.html, css/styles.css, js/scripts.js, and obviously the README.md. This repo is about my own Pizza Parlor, select toppings and a size to get a price returned back to you! Hope you enjoy._

## Setup/Installation Requirements

* _Clone my repository to your desktop using VsCode._
* In the terminal clone the repository with the command: git clone https://github.com/ajdemski/MyPizzaParlor
* _Navigte to the top level of the directory._
* _Open index.html in the file you cloned._

## _Link To Site_

* https://ajdemski.github.io/MyPizzaParlor/

## Known Bugs

* _No Known Bugs_

## Tests:

```
Describe: PizzaParlor()
Test 1: "It should create an object for size and toppings"
Code: let pizza = new PizzaParlor("small", ["Cheese", "Pepperoni"]);
Expected Output: undefined
```
```
Describe: PizzaParlor.SizePrice()
Test 2: "It should return the price of the small size"
Code: let pizza = new PizzaParlor("Small", []);
Expected Output: 5;
```
```
Describe: PizzaParlor.sizePrice()
Test 3: "It should return the price of the medium size"
Code: let pizza = new PizzaParlor("Medium", []);
Expected Output: 10;
```
```
Describe: PizzaParlor.sizePrice()
Test 4: "It should return the price of the large size"
Code: let pizza = new PizzaParlor("Large", []);
Expected Output: 15;
```
```
Describe: PizzaParlor.toppingPrice()
Test 5: "it should return a price based on the toppings selected"
Code: let pizza = new PizzaParlor("Medium", ["Cheese", "Pepperoni"]);
Expected Output: 4
```
```
Describe: PizzaParlor.totalPrice()
Test 6: "it should return a total price of the pizza and toppings combined"
Code: let pizza = new PizzaParlor("Medium", ["Cheese", Pepperoni"]);
Expected Output: 14;
```
## License

_Copyright (c) <2023> <Aaron Demski>_

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _December 10th, 2023_ Aaron Demski