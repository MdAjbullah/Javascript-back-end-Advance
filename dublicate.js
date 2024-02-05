// write a program to doublicate the given  elements


let arraydublicate = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let dublicate = arraydublicate.concat(arraydublicate);

console.log(dublicate); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 2ND METHOD

function dublicateArray(arr) {
  return arr.concat(arr);
}
console.log(dublicateArray([1, 2, 3, 4, 5, 6, 7, 8, 9])); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]

