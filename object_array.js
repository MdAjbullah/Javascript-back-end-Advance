// write a program to chech the given ooject is array or not

function cheackArray(arr) {
  
    if (Array.isArray(arr)) {
        console.log("It is an array"+arr);
    } else {
        console.log("It is not an array"+arr);
    }
}
cheackArray([1, 2, 3, 4, 5]);
cheackArray({ name: "sai", age: 23});


// write a program to chech the given array is object or not

function cheackObject(obj) {
    if (typeof obj === "object") {
        console.log("It is an object"+obj);
    } else {
        console.log("It is not an object"+obj);
    }
}
cheackObject([1, 2, 3, 4, 5]);
cheackObject({ name: "sai", age: 23});


// Arrayis also object