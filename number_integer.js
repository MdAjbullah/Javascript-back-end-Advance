// write a program to chech the given code is integer or not

const num = 56//.6; //% 1 === 0
  if (num % 1 === 0 ){
    console.log("It is an integer");
  } else {
    console.log("It is not an integer");
  }


//   2nd method

  function isInteger(num) {
    if (num % 1 === 0 ){
      return true;
    } else {
      return false;
    }
    
  }
    console.log(isInteger(num));



    // 3rd method

    function isInteger1(num) {
      return num % 1 === 0;
    }
      console.log(isInteger1(num));