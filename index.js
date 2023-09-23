/*
//Задание 1
let a;
a=10;
console.log(alert(a));
a=20;
console.log(alert(a));

//Задание 2
let first_iphone_year;
first_iphone_year =`Год выпуска первого iPhone 2007`;
console.log(alert(first_iphone_year));

//Задание 3
let createJS;
createJS= `Создатель JavaScript - Брендан Эйх`;
console.log(alert(createJS));

//Задание 4
let d = 10;
let f = 2;
console.log(alert(d+f));
console.log(alert(d-f));
console.log(alert(d*f));
console.log(alert(d/f));

//Задание 5
let two = 2;
let result =(two ** 5);
console.log(alert(result));

//Задание 6
let A = 9;
let b = 2;
let newResult = (A % b);
console.log(alert(newResult));


//Задание 7
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num++ ;
num--;
console.log(alert(num));

//Задание 8
let age = prompt(`Сколько вам лет?`);
console.log(alert(age));

//Задание 9.0
const user = {
    name: `Булат`,
    age: 25,
    isAdmin:true,
}
//Задание 9.1
user["city Of Residense"] = `Казань`;
//Задание 9.2
user.age = 27;
console.log(user);
//Задание 9.3
delete user["city Of Residense"];
//Задание 9.4
let info = prompt(`Какую информацию вы хотите знать о пользоватетеле?`, user.name, user.age, user.isAdmin, user["city Of Residense"]);
alert( user[info] );

//Задание 10
let yourName = prompt(`Укажите ваще имя`);
alert(`Привет, ${yourName}!`);


                        // Занятие 2.3
// Задание 1
let password = 'пароль';
let userPassword = String(prompt('Введите пароль'));
let message = (password === userPassword) ? 'Пароль введен верно' : 'Пароль введен неправильно';
console.log(message);

//Задание 2
let C = prompt('Введите число');
let result = (C>0 && C<10) ? 'Верно' : 'Неверно';
console.log(result);

//Задание 3 
let d = 10;
let c = 500;

let newResult = (d>100 || c>100) ? 'верно' : 'неверно';
console.log(newResult);

//Задание 4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
console.log(Number(a+b));

//Задание 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '12':
    case '1':
    case '2':  
        console.log('Сезон Зима');
        break;
    case '3':
    case '4':    
    case '5':
        console.log('Сезон Весна');
        break;
    case '6':
    case '7':
    case '8':        
        console.log('Сезон Лето');
        break;
    case '9':
    case '10':
    case '11':        
        console.log('Сезон Осень');
        break;                                     
    default:
        console.log('Такого месяца не существует')
        break;
}*/

// while(true) {
//     const msg = prompt('Введите сообщение');
//     console.log(msg);
//     if (msg === 'break') {
//         break;
//     }
// }

                             //Занятие 2.4
// //Задание 1
// let i = 0;

// while (i<2) {
//     console.log('Привет');
//     i++;
// }
// // Задание 2
// let I = 1;
// while (I<=5) {
//     console.log(I);
//     I++;
// }

// //Задание 3
// for (let i = 7; i < 23; i++) {
//     console.log(i);  
// }

// //Задание 4
// const obj = {
//     'Коля':200,
//     'Вася':300,
//     'Петя':400
// }
// for (let name in obj) {
//     console.log(`${name} зарабатывает ${obj[name]}`)
//     }

// //Задание 5
// for (let n = 1000, num = 0; n > 50; ) {
//     num++;
//     n = n/2;
//     if (n<50) {
//         console.log(n);
//         console.log(num); 
//     }
// }

// //Задание 6
// for (let dayOfTheWeek = 4; Number(dayOfTheWeek) < 31;) {
//     console.log(`Сегодня пятница, ${dayOfTheWeek}-е число. Необходимо подготовить отчет.`);
//     dayOfTheWeek = dayOfTheWeek + 7;
// }

                           // Занятие 2.5
// //Задание 1
// // Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.

// function minNumb(a , b) {
//     if (a < b) {
//         return a
//     } else { 
//         return b
//     }
// }
// minNumb(8 , 4);
// minNumb(6 , 6);
// console.log(minNumb(8 , 4));
// console.log(minNumb(6 , 6));

// // Задание 2
// // Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.

// function evenNotEven(n) {
//     if (n % 2 == 0) {
//         return ('Число четное')
//     } else { 
//         return ('Число нечетное')
//     }
// }
// evenNotEven(4);
// evenNotEven(5);
// evenNotEven(1);
// console.log(evenNotEven(4));
// console.log(evenNotEven(5));
// console.log(evenNotEven(1));

// // Задание 3
// // 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

// let squareNumb = (n) => n ** 2;
// squareNumb(10);
// console.log(squareNumb(10));

// // 3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

// let numbSquare = function (n) {
//     return n ** 2;
// }
// numbSquare(4);
// console.log(numbSquare(4));

// // Задание 4
// // Создайте функцию, которая:
// //  Спрашивает у пользователя, сколько ему лет.
// //  Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
// //  Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
// //  Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».

// let age = function (n = prompt('Сколько вам лет?') ) {
//     if ((n > 0) && (n <= 12)) {
//         alert('Привет, друг!')
//     } else if(n >= 13){
//         alert('Добро пожаловать!')
//     } else {alert('Вы ввели неправильное значение')}
// }
// age();

// // Задание 5
// // Напишите функцию, которая на вход принимает 2 числа:
// //  Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и 
// //      isNaN() помогут.)
// //  Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
// //  Если оба параметра — числа, то вернуть произведение данных чисел.

// let num = function (d , c) {
//     if (typeof d === "string") {
//         return ('Одно или оба значения не являются числом');
//     } else if (typeof c === "string") {
//         return ('Одно или оба значения не являются числом');
//     } 
//       else {
//         return d * c;
//     } 
// }
// num(8 , 32);
// num(NaN , '3');
// num(24, 'abc')
// console.log(num(8 , 32));
// console.log(num(1028 , 'r'));
// console.log(num(24, 'abc'));

// // Задание 6
// // Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, после чего возводит его в куб и возвращает следующую строку: 'n в кубе равняется <получившееся значение>'
//     // Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.

//     // Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами от 0 до 10 включительно.
    
//     let userAnswer = prompt('Введите число от 0 до 10');
//     let cubedNumb = function (userAnswer) {
//         if (isNaN(userAnswer)) {
//             return ('Переданный параметр не является числом');
//         } else {
//             return (`${userAnswer} в кубе равняется ${userAnswer ** 3}`);
//         } 
//     }
//     cubedNumb();
//     console.log(cubedNumb(userAnswer));

// // Задание 7
// // Создайте объекты circle1 и circle2 со свойством radius. У объектов должен быть методам getArea, которое возвращает площадь круга через радиус, а также getPerimet, который возвращает периметр окружности.

// function circleArea() {
//     return (Math.PI * (this.radius ** 2))
// }

// function circlePerimeter() {
//     return (Math.PI * 2 * this.radius)
// }
// const circle1 = {
//     radius: 9,
//     getArea: circleArea,
//     getPerimeter: circlePerimeter,
// }
// const circle2 = {
//     radius: 10,
//     getArea: circleArea,
//     getPerimeter: circlePerimeter,
// }
// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());

// ////////Занятие 2.6
// // Задание 1. Дан массив: [1, 5, 4, 10, 0, 3].
// // Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.

// const numbers = [1, 5, 4, 10, 0, 3];
//     for (i = 0; i < numbers.length; i++) {
//         if (numbers[i] == 10) break;
//         console.log(numbers[i])
//     }

// //  Задание 2
// // Дан массив: [1, 5, 4, 10, 0, 3]. Найдите позицию (индекс) числа 4 в этом массиве.

// const numbs = [1, 5, 4, 10, 0, 3];

// console.log(numbs.indexOf(4));

// //Задание 3
// //Дан массив чисел:[1, 3, 5, 10, 20]. С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

// const num = [1, 3, 5, 10, 20];
// let joinNum = num.join(" ");
// console.log(joinNum);

// // Задание 4
// // С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

// const arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (j = 0; j < 3; ++j) {
//         arr[i].push(1)
//     }

// }
// console.log(arr)

// // Задание 5
// // Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

// const oneTwo = [1, 1, 1];
// oneTwo.push(2, 2, 2);
// console.log(oneTwo);

// // Задание 6
// // Дан массив: [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.

// let sortArr = [9, 8, 7, 'a', 6, 5];
// sortArr.sort()
// console.log(sortArr);
// sortArr.pop();
// console.log(sortArr);

// // Задание 7
// // Дан массив: [9, 8, 7, 6, 5]. Попросить пользователя угадать число (использовать prompt). Если значение, которое ввёл пользователь, есть в массиве, вывести в alert «Угадал», в противном случае вывести «Не угадал».

// const array = [9, 8, 7, 6, 5];
// let userAnswer = prompt('Угадай число!');
// userAnswer = Number(userAnswer);
// // console.log(typeof userAnswer)
// let search = array.includes(userAnswer);
// // console.log(search);
// if (search == true) {
//     alert('Угадал');
//     console.log('Угадал');
// } else {
//     alert('Не угадал');
//     console.log('Не угадал');
// }

// // Задание 8
// // Дана строка: 'abcdef'. Необходимо, чтобы программа вывела в консоль 'fedcba'.

// let str = 'abcdef';
// let arrayStr = str.split('');
// // console.log(arrayStr);
// let reverseArrayStr = arrayStr.reverse();
// // console.log(reverseArrayStr);
// reverseArrayStr = reverseArrayStr.join('');
// console.log(reverseArrayStr);

// // Задание 9
// // Дан массив: [[1, 2, 3,],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//   ];
//   const arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       arr2.push(arr[i][j]);
//       //console.log(arr[i][j]);
//     }
//   }
  
// console.log(arr2);

// // //Задание 10
// const numbers = [3, 7, 2, 8, 5, 9, 1, 4, 6];
// for (let i = 0; i < numbers.length; i++) {
//     if (i + 1 < numbers.length) {
//     let sum = numbers[i] + numbers[i + 1];
//     console.log(`Сумма текущего элемента ${numbers[i]} и следующего элемента: ${sum}`);
//     }
// }


// // //Задание 11
// let getArrSqr = function (array) {
//     const arrSqr = [];
//     for (let i = 0; i < array.length; i++) {
//         arrSqr.push(Math.pow(array[i], 2));
//     }
//     return arrSqr;
// }
// getArrSqr([2, 5, 6, 3, 5]);

// // Задание 13
// // Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.

// function filterPositive(array) {
//     let posArr = array.filter(el => el < 0);
//     return posArr;
//   }
// filterPositive([-2, 5, -1, 9, -9]);


// //Задание 12
// // Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

// function getStrLength(arrStr){
//     let strLength = [];
//     for(let i = 0; i < arrStr.length; i++) {
//       strLength.push(arrStr[i].length)  
//     }
//     return strLength
//   }
//   getStrLength(['god', 'name', 'object', 'subzero', 'wasabi']);


/////////Занятие 2.7
//Задание 1
let str = 'js';
let result = str.toUpperCase();
console.log(result);

//Задание 2

function wordsSearch(words, str) {
    let arrWord = [];
      words.forEach((el) => { 
          if (el.toLowerCase().startsWith(str.toLowerCase())) {
              arrWord.push(el);
          }
      });
      console.log(arrWord);
  }
  wordsSearch(['Квазимодо', 'Пакет', 'Палитра', 'Пандус', 'Павильон'], 'па');

//Задание 3
// Округлите число 32.58884:
//  До меньшего целого
//  До большего целого
//  До ближайшего целого

let x = 32.58884;
let xFloor = Math.floor(x);
let xCeil = Math.ceil(x);
let xRound = Math.round(x);
console.log(xFloor);
console.log(xCeil);
console.log(xRound);

// Задание 4
// Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

const num = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...num));
console.log(Math.min(...num));

// Задание 5
// Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

function getRandomNumb(max) {
    return Math.floor(Math.random() * max);
}
  getRandomNumb(10);

// Задание 6
// Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.


function getRandomArrNumbers(num) {
    let arrNumbers = [];
    for (let i = 0; i < Math.floor(num / 2); i++) {
      arrNumbers.push(Math.round(Math.random() * num));
    }
  console.log(arrNumbers);
}
getRandomArrNumbers(12);


// Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

function getRandomNumbers(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
  }
console.log(getRandomNumbers(5, 25));


// Задание 8
// Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.

let date = new Date();
console.log(date);


// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
//  Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
//  Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.


const days = ["Воскресенье", "Понедельник", "Вторник", "Среда","Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function getData(data) {
    let now = new Date(data);
    let fullDate = "Дата: " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " - это " + days[now.getDay()]; 
    let hour = now.getHours(); 
    let minute = now.getMinutes(); 
    let second = now.getSeconds(); 
    if (minute < 10) { 
        minute = "0" + minute; 
    }
    if (second < 10) { 
        second = "0" + second; 
    }
    
    let time = "Время: " + hour + ":" + minute + ":" + second;
    
    console.log(fullDate);
    console.log(time);
}
getData('2022-05-25 9:00');

