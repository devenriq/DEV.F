const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function simpleArraySum(ar) {
  // Write your code here
  let sum = 0;
  for(let i=0; i<ar.length; i++){
    sum = sum + ar[i];
  }
  return sum
}
// simpleArraySum(nums);
console.log(simpleArraySum(nums));