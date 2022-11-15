const removeFromArray = function(array, ...args) {
  for (const element of args) {
    if (array.includes(element)) {
      i = array.indexOf(element);
      array.splice(i, 1);
    }
  };
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
