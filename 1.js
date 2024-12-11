//1
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// let i = 1;
// while (i <= 50) {
//     console.log(i);
//     i++;
// }

//2
// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }
// for (const element of array) {
//     console.log(element);
// }

//3
// const array = [2, 3, 4, 5];
// let product = 1;

// for (let i = 0; i < array.length; i++) {
//     product *= array[i];
// }

// let i = 0;

// while (i < array.length) {
//     product *= array[i];
//     i++;
// }

// for (const element of array) {
//     product *= element;
// }

// console.log(product); 

//4
// let i = 11;

// while (i <= 33) {
//     console.log(i);
//     i++;
// }

//5
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

//6
// const array = [1, 2, 3, 4, 5];
// let sum = 0;

// for (const element of array) {
//     sum += element;
// }

// console.log(sum);

//7
// const array = [2, 5, 9, 15, 0, 4];

// for (const element of array) {
//     if (element % 3 === 0) {
//         console.log(element);
//     }
// }

//8
// const mix = ["apple", 3, "orange", 2];
// const number = [];

// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === 'number') {
//         number.push(mix[i]);
//     }
// }

// console.log(number);

//9
// const array = [2, 5, 9, 15, 0, 4];
// let i = 0;

// while (i < array.length) {
//     if (array[i] % 5 === 0 || array[i] % 3 === 0) {
//         console.log(array[i]);
//     }
//     i++;
// }

//10
// const array = [-1, 2, 3, -4, 5];
// let sum = 0;

// for (const element of array) {
//     if (element > 0) {
//         sum += element;
//     }
// }

// console.log(sum); 

//11
// const array = [1, 2, 2, 3, 4, 4, 3, 4, 5];
// const uniqueElements = [];

// for (let i = 0; i < array.length; i++) {
//     if (!uniqueElements.includes(array[i])) {
//         uniqueElements.push(array[i]);
//     }
// }

// for (const element of array) {
//     if (!uniqueElements.includes(element)) {
//         uniqueElements.push(element);
//     }
// }
// console.log(uniqueElements); 

//12
// const array = [];

// for (let i = 0; i < 10; i++) {
//     const value = prompt(`Введите число`);
//     array.push(value);
// }

// for (let i = 0; i < array.length; i++) {
//     if (array[i].startsWith('1') || array[i].startsWith('2') || array[i].startsWith('5')) {
//         console.log(array[i]);
//     }
// }

//13
// const array = [];

// for (let i = 0; i < 10; i++) {
//     const value = prompt(`Введите строку`);
//     array.push(value);
// }

// let result = '';

// for (let i = 0; i < array.length; i++) {
//     result += '-' + array[i];
// }

// console.log(result); 

//14
// for (let i = 1; i <= 100; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }

//15
// const sentence = prompt("Введите предложение:");
// const n = parseInt(prompt("Введите количество повторений:"), 10);

// const repeatedSentence = (sentence + ' ').repeat(n).trim();

// console.log(repeatedSentence);

//16
// const number = 55639217;
// const numberString = number.toString(); 
// let result = '';

// for (let i = 0; i < numberString.length; i++) {
//     result += numberString[i]; 

//     if (i < numberString.length - 1 && 
//         numberString[i] % 2 !== 0 && 
//         numberString[i + 1] % 2 !== 0) {
//         result += ':'; 
//     }
// }

// console.log(result); 

//17
// let sum = 0;
// let i = 1;

// while (i <= 100) {
//     sum += i;
//     i++;
// }

// console.log(sum); 