//Nama : Muhammad Fajrin Tsinan F
//Mata Kuliah Pemograman Berbasis Platform

// A
console.log('Hello');
console.log("Muhammad Fajrin Tsinan F");
console.log('You Can Call Me "Fajrin');
console.log("Go away, I'm coding");
console.log('I am sorry \n please forgive me');

// B
let number1 = 3;
let number2 = 9;
let number3 = 7;
let number4 = 6;
let number5 = 2;

console.log(number1 + number2 - number3 * number4 / number5);
console.log(number1 + (number2 - number3) * number4 / number5);

// C
let conditionA = true;
let conditionB = false;
let conditionC = true;
let conditionD = false;

console.log(conditionA && conditionB || conditionC && conditionD);

// D
let age = 20;
let result = (age > 17) ? "Adult" : (age > 10) ? "Teenager" : "Child";
console.log(result);

// E. WRITE THE FOLLOWING PROGRAM CODE
let numA = 176;
let numB = 183;

console.log(numA & numB);
console.log(numA | numB);
console.log(numA ^ numB);
console.log(numA >> 2);
console.log(numB << 2);
console.log(numA >> 2);
console.log(numB << 2);

let numC = 1;
console.log(numC << 1);
console.log(numC << 2);
console.log(numC << 3);
console.log(numC << 4);
console.log(numC << 5);
console.log(numC << 6);
console.log(numC << 7);
console.log(numC << 8);

// F
let fullName = (fn, mn, ln) => {
    return `${fn} ${mn} ${ln}, ${getTitle()}`;
}

let getTitle = () => {
    return "S.p";
}

console.log(fullName('Muhammad', 'Fajrin', 'Tsf'));
