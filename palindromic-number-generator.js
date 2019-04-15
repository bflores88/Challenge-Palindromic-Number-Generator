"use strict";

function palindromicNumberGenerator(num) {
  // do work here
  if (num < 0) {
    return false;
  }

  let result = {};
  let palindromeCheck = num;
  let count = 0;
  let reversed = Number(
    palindromeCheck
      .toString()
      .split('')
      .reverse()
      .join(''),
  );

  while (palindromeCheck !== reversed) {
    palindromeCheck = palindromeCheck + reversed;
    reversed = Number(
      palindromeCheck
        .toString()
        .split('')
        .reverse()
        .join(''),
    );
    count++;
  }

  result.value = palindromeCheck;
  result.steps = count;
  return result;
}

module.exports = palindromicNumberGenerator;
