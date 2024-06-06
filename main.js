//Given a square matrix, calculate the absolute 
//difference between the sums of its diagonals.
//THIS IS A TEST CHNAGE 
//For example, the square matrix array is shown below:  
   
//1 2 3
//4 5 6   
//9 8 9       
  
///The left-to-right diagonal: 1 + 5 + 9=15 . The right to left diagonal:3 + 5 + 9= 17   
//Their absolute difference is . | 15 - 17| = 2;  
 feature-A
 
// I MADE THIS CHANGE
// I added this comment

function diagonalDifference(arr) {
  let leftAb = 0; 
  let rightAb = 0;
 
  arr.forEach((num, index) => {
    leftAb = leftAb + arr[index][index];
  }); 
  arr.forEach((num, index) => {
    rightAb = rightAb + arr[index][num.length - 1 - index];  
  });

  return Math.abs(leftAb - rightAb);
}

const square = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const dif = diagonalDifference(square);

//console logs *2*
console.log(dif);
