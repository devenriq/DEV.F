// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.

// • After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

// • Finally, check the amount against your bank account balance to see if you can afford it or not.

// • You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as well as a variable for your “bank account balance.”

// • You should define functions for calculating the tax and for formatting the price with a “$” and rounding to two decimal places.

// • Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in “Input” on page 6. You may prompt the user for their bank account balance, for example. Have fun and be creative!

let bankAmount = prompt('How much do you have in yout bank account?');
const spendingThreshold = 1/2 * bankAmount;
const phonePrice = 99.99;
const phoneAccesory = 9.99;
const taxRate = 0.18;


function printAmount(amt) {
  for (let i = 0; amt < spendingThreshold; i++){

  }
}