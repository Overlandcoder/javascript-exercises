const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
  let sum = 0;
	for (const value of array) {
    sum += value;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (const value of array) {
    product *= value;
  }
  return product;
};

const power = function(n1, n2) {
  return n1 ** n2;
};

const factorial = function(num) {
	let factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
