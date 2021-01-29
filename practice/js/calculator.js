/*
 *   Using functions and all that you have learnt in the class today
 *   Write a program for a calculator
 *   We will call a function for each of the following operations
 *     - Addition         :     The Sum of a & b is: 16
 *     - Subtraction     :     The Difference between a & b is: 26
 *     - Multiplication   :     The Product of a & b is: 963
 *     - Division         :     The Quotient of a & b is: 165892
 *                              If a is less than b, then display the following message in the Console: This number cannot be divisible, since the Numerator is Less than the Denominator
 *     - Modulo           :     The Modulo of a & b is: 4
 *   The calling function will have 2 values for performing the above operations
 */

function addition(num1, num2) {
  return "The Sum of a & b is: " + num1 + num2;
}

function subtraction(num1, num2) {
  return "The Difference between a & b is: " + (num1 - num2);
}

function multiplication(num1, num2) {
  return "The Product of a & b is: " + num1 * num2;
}

function division(num1, num2) {
  if (num1 < num2) {
    return "This number cannot be divisible, since the Numerator is Less than the Denominator";
  } else {
    return "The Quotient of a & b is: " + num1 / num2;
  }
}

function modulo(num1, num2) {
  return "The Modulo of a & b is: " + (num1 % num2);
}

console.log(
  addition(15, 1) +
    "\n" +
    subtraction(52, 26) +
    "\n" +
    multiplication(3, 321) +
    "\n" +
    division(331784, 2) +
    "\n" +
    modulo(4, 2)
);
