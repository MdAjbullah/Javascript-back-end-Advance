// write a progrma to print the given string in reverse order

// Input: oh my god my brother is the very good persion that are menttain the every thin in the world



let str="oh my god my brother is the very good persion that are menttain the every thin in the world";
 let strw=str.split(" ")

.map(function (word) {

  return word.split("").reverse().join("");
  
})
console.log(strw.join(" "));







