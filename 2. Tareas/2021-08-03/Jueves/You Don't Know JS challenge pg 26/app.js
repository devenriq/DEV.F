// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.

// • After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

// • Finally, check the amount against your bank account balance to see if you can afford it or not.

// • You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as well as a variable for your “bank account balance.”

// • You should define functions for calculating the tax and for formatting the price with a “$” and rounding to two decimal places.

// • Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in “Input” on page 6. You may prompt the user for their bank account balance, for example. Have fun and be creative!

let bankAmount = prompt('Hi! Please, insert the amount you have to buy.');
let totalCost = 0;
let totalPhones = 0;
let totalAccesories = 0;

const spendingThreshold = 1/2 * bankAmount;
const phonePrice = 239.99;
const phoneAccesory = 20.99;
const taxRate = 0.18;

// taxes
function taxPrice(total){
  return total + (total * taxRate);
}

// formating
function formatDolar (total){
  return '$' + total.toFixed(2);
}

// initial bank amount
console.log(`Your initial bank amount is ${bankAmount}`)

// buying

while((totalCost < bankAmount) && (totalCost < spendingThreshold)) {
  totalCost += taxPrice(phonePrice);
  totalPhones = totalPhones + 1;

  if(totalCost < spendingThreshold){
    totalCost += taxPrice(phoneAccesory);
    totalAccesories = totalAccesories +1 ;
  }
}

// update balance
bankAmount += totalCost;

// printing

console.log(`The total amount of the phones is: ${totalPhones}`)
console.log(`The total amount of the accesories is: ${totalAccesories}`)
console.log(`The total cost of your purcharse is: ${totalCost}`)
console.log(`Thanks for buying with us!`)