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





