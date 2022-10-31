'use strict';
console.log('reduce.js');

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const nums = [5, 10, 1, 50, 12];

// surasti bendra masyvo reiksmiu suma su forEach

let total = 0;
nums.forEach((sk, i, arr) => {
  // sumuoti su total
  total = total + sk;
});
console.log('total ===', total);

// surasti bendra masyvo reiksmiu suma su reduce
const reduceRezult = nums.reduce((total, sk, i, arr) => {
  // ispausdinti su konsole kiekvienos iteracijos:
  // indexa, total, sk
  return total + sk; // 1
}, 0);
console.log('reduceRezult ===', reduceRezult);
