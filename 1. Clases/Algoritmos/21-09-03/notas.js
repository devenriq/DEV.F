let arr2 = [7, 9, 15];
let arr1 = [6, 8, 12];

function compareTriplets(a, b) {
// Write your code here
let total = [0, 0]
  for(let i=0; i<a.length; i++){
    if(a[i] !== b[i]){
      a[i] > b[i] ? total[0] +=1 : total[1] += 1
    }
  }
  return total
}

console.log(compareTriplets(arr1, arr2));