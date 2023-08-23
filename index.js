
/*//Задание 1
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
*/
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
