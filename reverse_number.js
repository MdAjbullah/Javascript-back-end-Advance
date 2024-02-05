// write the program to reverse the given number


// let num = 123456789;
// num.toString().split("").reverse().join("");
// console.log(num.tonumber().split("").reverse().join(""));


// 2nd method
// function reverseNumber(num) {
//   return num.toString().split("").reverse().join("");
// }
// console.log(reverseNumber(123456789)); //987654321


// 3rd method

// function reverseNumber(num) {
//   while(num > 0) {
//     let rem = num %10;
//     console.log(rem);
//     num = parseInt(num / 10);
//   }
// }
// reverseNumber(123456789);

// 4 th method

// function reverseNumber(num) {
//   let rev = 0;
//   while(num > 0) {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = parseInt(num / 10);
//   }
//   return rev;
// }


// 5th method

function reverseNumber(num) {
   var rev= 0;
   while(num > 0) {
     let rem = num % 10;
     rev = rev * 10 + rem;
     num = Math.floor(num / 10);
   }
   return rev;
}
console.log(reverseNumber(123456789)); //987654321


