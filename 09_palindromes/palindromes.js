const palindromes = function (string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return processedString === processedString
                                    .split("")
                                    .reverse()
                                    .join("");
};

// Do not edit below this line
module.exports = palindromes;
