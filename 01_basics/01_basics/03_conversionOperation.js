"use strict";

// Conversion examples
let score = "33";
console.log(typeof score);        // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber);        // 33

console.log(Number("33abc")); // NaN
console.log(Number(null));    // 0
console.log(Number(undefined)); // NaN

