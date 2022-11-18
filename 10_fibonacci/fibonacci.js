const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  
  let fibs = [1, 1];

  for (i = 1; i <= num; i++) {
    let newnum = fibs.at(-1) + fibs.at(-2);
    fibs.push(newnum);
  }
  return fibs[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
