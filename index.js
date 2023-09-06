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
//Задание 1
// Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.

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

// Задание 2
// Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.

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

// Задание 3
// 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

// let squareNumb = (n) => n ** 2;
// squareNumb(10);
// console.log(squareNumb(10));

// 3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

// let numbSquare = function (n) {
//     return n ** 2;
// }
// numbSquare(4);
// console.log(numbSquare(4));

// Задание 4
// Создайте функцию, которая:
//  Спрашивает у пользователя, сколько ему лет.
//  Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
//  Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
//  Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».

// let age = function (n = prompt('Сколько вам лет?') ) {
//     if ((n > 0) && (n <= 12)) {
//         alert('Привет, друг!')
//     } else if(n >= 13){
//         alert('Добро пожаловать!')
//     } else {alert('Вы ввели неправильное значение')}
// }
// age();

// Задание 5
// Напишите функцию, которая на вход принимает 2 числа:
//  Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и 
//      isNaN() помогут.)
//  Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
//  Если оба параметра — числа, то вернуть произведение данных чисел.

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

// Задание 6
// Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, после чего возводит его в куб и возвращает следующую строку: 'n в кубе равняется <получившееся значение>'
    // Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.

    // Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами от 0 до 10 включительно.
    
    // let userAnswer = prompt('Введите число от 0 до 10');
    // let cubedNumb = function (userAnswer) {
    //     if (isNaN(userAnswer)) {
    //         return ('Переданный параметр не является числом');
    //     } else {
    //         return (`${userAnswer} в кубе равняется ${userAnswer ** 3}`);
    //     } 
    // }
    // cubedNumb();
    // console.log(cubedNumb(userAnswer));

// Задание 7
// Создайте объекты circle1 и circle2 со свойством radius. У объектов должен быть методам getArea, которое возвращает площадь круга через радиус, а также getPerimet, который возвращает периметр окружности.

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
