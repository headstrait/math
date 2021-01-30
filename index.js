// [Dilesh Tanna - 30/01/2021] Entry point of package math

// function [add] will accept two parameters that are numbers and return the addition of the two numbers
const add = (numberOne, numberTwo) => {
  // If both params are not numbers, throw an error.
  if (isNaN(numberOne) || isNaN(numberTwo)) {
    throw "Both parameters should be numbers";
  }

  // If both params are numbers, return the addition of the two
  return numberOne + numberTwo;
};

// Exporting all the modules from this package
module.exports = {
  add,
};
