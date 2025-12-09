//Prime number check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

//Sum of digits
let number = 123;
let temp = number;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit;
    temp = Math.floor(temp / 10);
}

console.log(sum);

//Reverse a string (manual)
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));

//Grade based on marks
function getGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";
}

console.log(getGrade(92));
console.log(getGrade(80));
console.log(getGrade(60));
console.log(getGrade(30));

//Calculator function
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 === 0 ? "Error" : num1 / num2;
        default: return "Invalid";
    }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "*"));

//Count vowels
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) count++;
    }

    return count;
}

console.log(countVowels("Vaibhav"));

//Fibonacci series
function printFibonacci(n) {
    let a = 0, b = 1;

    if (n >= 1) console.log(a);
    if (n >= 2) console.log(b);

    for (let i = 3; i <= n; i++) {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}

printFibonacci(7);

//Min & Max from array
function getMinMax(arr) {
    if (arr.length === 0) return "Empty";

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return { min, max };
}

console.log(getMinMax([5, 2, 8, 1, 9]));

//Switch-case Menu
let choice = 3;
let n1 = 10;
let n2 = 5;

switch (choice) {
    case 1: console.log(n1 + n2); break;
    case 2: console.log(n1 - n2); break;
    case 3: console.log(n1 * n2); break;
    case 4: console.log(n2 === 0 ? "Error" : n1 / n2); break;
    default: console.log("Invalid");
}

//Armstrong number
function isArmstrong(num) {
    let str = String(num);
    let digits = str.length;
    let sum = 0;

    for (let i = 0; i < digits; i++) {
        let digit = Number(str[i]);
        sum += digit ** digits;
    }

    return sum === num;
}

console.log(isArmstrong(153));
console.log(isArmstrong(370));
console.log(isArmstrong(123));