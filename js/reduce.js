'use strict';
console.log('reduce.js');

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const nums = [5, 7, 1, 50, 12];

// surasti bendra masyvo reiksmiu suma su forEach

let total = 0;
nums.forEach((sk, i, arr) => {
  // sumuoti su total
  total = total + sk;
});
console.log('total ===', total);
console.log('nums ===', nums);
// surasti bendra masyvo reiksmiu suma su reduce
// debugger;
const reduceRezult = nums.reduce((total, sk, i, arr) => {
  // ispausdinti su konsole kiekvienos iteracijos:
  // indexa, total, sk
  const sum = total + sk;
  // console.log(`iteracija: ${i}, sk: ${sk}, total: ${sum}`);
  return sum; // 1
}, 0);
console.log('reduceRezult ===', reduceRezult);
