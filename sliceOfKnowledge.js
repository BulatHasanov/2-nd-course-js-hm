///////////////// Для видоса по датам

// let now = new Date();
// console.log(+now);
// let bornDate = new Date(2015, 5, 12, 16, 0, 0);
// console.log(+bornDate);
// let searchDate = now - bornDate;
// let howDay = searchDate / 24 / 60 / 60 / 1000;
// console.log(howDay);

////////////Ближайшее квадрат 
////Мой код для ближайшего квадрата

// let num = function(n) {
//     n = Math.pow(n , 0.5);
//     if (Number.isInteger(n) === true) {
//         return n = Math.pow(n , 2);
//     } else {
//         n = Math.round(n);
//         let result = Math.pow(n , 2);
//         result = Number(result);
//         return result;
//     }

// }
// num(111);
// num(144);
// // console.log(num(111));
// // console.log(num(144));

// Изикод для ближайшего квадрата

// const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
// nearestSq(111);
// console.log(nearestSq(111));

/////Проверка на целое число

// let num = function(n) {
//     if(n >= 0) {
//         n = Math.pow(n , 0.5);
//         if (Number.isInteger(n) === true) {
//             return (n = Math.round(Math.pow(n, 2)), '=> true')
//         } else {
//             return (n = Math.round(Math.pow(n, 2)), '=> false');
//         }
//     } else {
//         return ('=> false')
//     }
// }
// num(2);
// num(3);
// num(4);


// let num = function(n){
//     if(n >= 0) {
//     n = Math.pow(n , 0.5);
//     if (Number.isInteger(n) === true) {
//        return (n = Math.round(Math.pow(n, 2)), true);
//     } else {
//         return (n = Math.round(Math.pow(n, 2)), false);
//     }
// } else {
//         return (false)
//     }
// }
/////// Изи код 
// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
//   }

////////////////Мой код для создания массива квадратов двойки
// let getSquereOfTwo = function (n) {
//     let arrSqrOfTwo = [];
//     for (let i = 0; i <= n; i++) {
//       let sqrOfTwo = Math.pow(2 , i);
//       arrSqrOfTwo.push(sqrOfTwo);
      
//     }
//     return arrSqrOfTwo;
//   }
//   getSquereOfTwo(7);

////////////////Изи код для создания массива квадратов двойки
// function powersOfTwo(n) {
//     return Array.from({length: n + 1}, (v, k) => 2 ** k);
//   }

/// Как найти колчиство вхождений символа в строке\массиве

// function strCount(str, letter){
//     let splt = str.split(letter);
//     console.log(splt);
//     return str.split(letter).length-1
//   }
//   strCount('gobbledygook', 'o');

////////////////////////////////////////

// function squareSum(numbers){
//     return numbers.reduce((accumulator, currentValue) => acc + Math.pow(currentValue, 2), 0)
// }

///////////////////Переворот строки
// function solution(str) {
//     return str.split('').reverse().join('');
//   }

/////////////AddLength Задание
// function addLength(str) {
//     let arrStr = str.split(' ');
//     return arrStr.map(x => x + ' ' + x.length);
//   }





///////////Занятие 2.7
// //Задание 1
// let str = 'js';
// let result = str.toUpperCase();
// console.log(result);

// //Задание 2

// function wordsSearch(words, str) {
//     let arrWord = [];
//       words.forEach((el) => { 
//           if (el.toLowerCase().startsWith(str.toLowerCase())) {
//               arrWord.push(el);
//           }
//       });
//       console.log(arrWord);
//   }
//   wordsSearch(['Квазимодо', 'Пакет', 'Палитра', 'Пандус', 'Павильон'], 'па');

// //Задание 3
// // Округлите число 32.58884:
// //  До меньшего целого
// //  До большего целого
// //  До ближайшего целого

// let x = 32.58884;
// let xFloor = Math.floor(x);
// let xCeil = Math.ceil(x);
// let xRound = Math.round(x);
// console.log(xFloor);
// console.log(xCeil);
// console.log(xRound);

// // Задание 4
// // Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

// const num = [52, 53, 49, 77, 21, 32];
// console.log(Math.max(...num));
// console.log(Math.min(...num));

// // Задание 5
// // Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

// function getRandomNumb(max) {
//     return Math.floor(Math.random() * max);
// }
//   getRandomNumb(10);

// Задание 6
// Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.


function getRandomArrNumbers(num) {
    let arrNumbers = [];
    arrNumbers.length = Math.floor(num / 2);
    arrNumbers.push(Math.random() * num);
    console.log(arrNumbers);
}