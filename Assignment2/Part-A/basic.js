//Sum of two numbers
let a = 10;
let b = 20;
let sum = a + b;
console.log("Sum:", sum);

//Print "Hello <name>"
let name = "Vaibhav";
console.log("Hello " + name);

//Even/Odd check
let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//Celsius → Fahrenheit
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Fahrenheit:", fahrenheit);

//Max among 3 numbers
let x = 10, y = 25, z = 15;

let max = Math.max(x, y, z);
console.log("Maximum:", max);

//Find string length
let str = "JavaScript";
console.log("Length:", str.length);

//Toggle boolean
let flag = true;
flag = !flag;
console.log("Toggled:", flag);

//Concatenate strings
let first = "Hello";
let second = "World";
let result = first + " " + second;

console.log(result);

//Positive / Negative / Zero
let n = 0;

if (n > 0) {
    console.log("Positive");
} else if (n < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//var / let / const example
var a1 = 10;     // var → function scoped
let b1 = 20;     // let → block scoped
const c1 = 30;   // const → cannot be reassigned

console.log(a1, b1, c1);

//Multiplication table
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

//Sum of first 10 natural numbers
let sum10 = 0;

for (let i = 1; i <= 10; i++) {
    sum10 += i;
}

console.log("Sum:", sum10);

//Switch-case → day name
let day = 3; // Example

switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
}

//Function → Factorial
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log("Factorial:", factorial(5));

//Function → Voting eligibility
function checkVoting(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible";
    }
}

console.log(checkVoting(20));
