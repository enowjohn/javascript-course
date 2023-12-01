// let num1 = 45
// let num2 = 90

// const sum = num1 + num2

// console.log("The sum is"+ sum )

// let length = 12
// let width = 6

// const area = length * width

// console.log("the area of the the retangle is:", area)

// var firstName = "Jack"
// var lastName = "Daniel"

// let age = 25
// if (age > 25) {
//     console.log("you are old")
// }

// let time = 12

// if (time < 12) {
//     console.log("good morning")
// }

// else(time < 12)
// console.log("good afternoon")

// let a = 6
// let b = 8
// let s = a + bconsole.lo(s)

// if (a){
//     console.log("true")
// } else {
//     console.log("false")
// }


// let index = 1
// while (index < 10) {
//     console.log(index+1)
//     index += 2
// }

// let age1 = 50





//print out the christ-mass tree.

// let t = 5; // height of pattern
// let strings = "";
// // External loop
// for (let i = 1; i <= t; i++) {
//   // Internal loop
//   for (let j = 1; j <= i; j++) {
//     strings += '*';
//   }
//   strings += "\t";
// }
// console.log(strings);


// for (let p = 1; p <= 8; p++) {
//     let step = ''
//     for (let b = 0; b < b; b++) {
//         step += '*'
//     }
//     step += '\n'
// }
// console.log(step)

// chessboard = num => {
//     let output = ""
//     for (i = 1; i<=num; i++) {
//         for (j = 1; j<=num; j++) {
//             ((i+j)%2 ==0 ? output += "" : output += "#")
//         }
//         output += "\n"                            
//     }
//     console.log(num);
// }




// for (var num = 1; num < 101; num++) {
//     var checkForThree = num % 3;
//     var checkForFive = num % 5;

//     if ((checkForThree == 0) && (checkForFive == 0))
//     console.log("FizzBuzz");
// else if (checkForThree == 0)
// console.log("Fizz")
// else if (checkForFive == 0)
// console.log("Buzz");
// else
// console.log(num);

// }

// founction for printing ood nubers using function
// const printOddNumbers =  (n) => {
//     for (let index = 0; index<n; index++) {
//         if (index % 2 != 0) {
//             console.log(index)
//         }
//     }
// }

// printOddNumbers(10000)


// function greeting(message) {
//     return function(name) {
//         return message + ' ' + name
//     }
// }

// let sayhi = Greeting("Hi")
// let sayhello = greeting("Hello")




// for (var index  = 1; index <= 100; index++) {
//     (function(counter){
//         settimeout(function(){
//             console.log('after ' + counter + 'second(s):' + index) 
//         })
//     })
// }






// var t = multiplier(5)(5)
// function multiplier(number) {
//     return function(factor) {
//         return number * factor
//     }
// }
// console.log(t);



// function factorial(num) {
//     if (num < 0)
//     return -1;
// else if (num == 0)
// return 1;
// else {
//     return (num * factorial(num - 1));
// }
// }
// factorial(5);
// console.log(factorial(5, 4));



// let obj = {}
// obj.name = 'Jack'

// obj["name"]
// console.log(obj)



// const person {
//     firstName: "Erling",
//     lastname: "Halland", 
// }



//write a function called countBs that takes a string as it only argument and returns a number that indicate how many opper case "B" characters are in the string


// const countBs (uppercase) => {

// }



















//write a function that return odd or even number using the cursion
function isEven (number){
    if (number === 0){
        return "even";
} else if (number === 1) {
    return "odd";
} else if (number < 0) {
    return isEven(number + 2);
} else {
    return isEven(number - 2);
}
}
console.log(isEven(75));
console.log(isEven(52));
console.log(isEven(-3));
console.log(isEven(-8));
console.log(isEven(5));




// (2)the nacci first series of numbers

// function nacci(num) {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     let i = 0;
//     for (i = 0; i < num; i++) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//     }
//     return num2;
// }
// console.log("nacci(5) : " + nacci(5));
// console.log("nacci(8) :   " + nacci(8)); 




function nacci(num) {
    if (num == 1)
    return 0;
if (num == 2)
return 1;
let num1 = 0;
let num2 = 1;
let sum;
let i = 2;
while (i < num) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    i += 1;
}
return num2;
}
console.log("nacci(5) : " + nacci(5));
console.log("nacci(8) : " + nacci(8));







//the function range from start to end

function range(start, end) {
    let array = [];
    for (let counter = 0; counter < end; counter++) {
        array.push(start);
        start += 1;
    }
    return array;
}
console.log(range(1,5));





//function that take the sum of all the number in an array and sum them up 
//[1, 2, 3, 4, 5]

function sum(a, b, c, d, e){
    sum = a + b + c + d + e;
    return sum;
}
const numsum = sum(1, 2, 3, 4, 5);
console.log(numsum);


//the function that works just like range but only that it increment

// function (start, end , increment) {
//     var array = [];
//     var current = start;

//     increment = increment || 1;
//     if (increment > 0) {
//         while (current <= end) {
//             array.push(current);
//         current += increment;
//         }
//     } else {
//         while (current >= end) {
//             array.push(current);
//             current += increment;
//         }
//     }
//     return array;
// }
// console.log(range(1, 3, 0));
// console.log(range(2, 5));
// console.log(range(1, 9, 1));
// console.log(range(5, 2, -1));



//average of a sum of array [1,2,3,4,5]


const arr = [1, 2, 3, 4, 5];
var sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
console.log(average);




//the function name countBs that indicate the uppercase

let count = 0;
function countBs(str) {
    for (let i = 0; 1 <= str.length - 1; i++){
        if (str[1]=== "B") {
            count += 1
        }
    }
    return count
}
console.log(countBs('BaBByBoo'));








function steprange(start, end, step) {
    const array = [];
    for (let r = start; r <= end; step++) {
        array.push(start);
        start += 1;

    }
    return array;
}
console.log(steprange(1, 10, -2));