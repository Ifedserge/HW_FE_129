console.log("задача 1");
 let name = prompt("Ваше имя?");
 let age = prompt("Ваш возраст?");
 let city = prompt("Ваш город?")
 let phone = prompt("Ваш телефон?");
 let email = prompt("Ваш email?");
 let company = prompt("Ваша компания?");
 console.log(`Меня зовут ${name} Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

 console.log("");

 console.log("задача 2");
 let now =  2023;
//  let year = now - age;
 console.log(`${name} родился в ${now - age} году.`);

 console.log("");
 
 console.log("задача 3");
 
let str = prompt('Число?')

console.log(str);
let sum1 =  Number(str[0]) + Number(str[1] + Number(str[2]))
let sum2 =  Number(str[3]) + Number(str[4] + Number(str[5]))

if(sum1 == sum2){
    console.log("да");
}else{
    console.log('нет');
}
 
console.log("");

console.log("задача 4");

let a = prompt("Введите число");
if( a > 0){
    console.log("верно");
}else{
    console.log("Неверно");
}


console.log("");

console.log("задача 5");
a = 10;
let b = 2
let summ = a + b;
let diff = a -b;
let multiplication = a * b;
let division = a / b;
if( summ > 2){
    console.log(Math.pow(summ, 2));
}

console.log("");

console.log("задача 6");

if(a > 2 & a < 11 || b >= 6 & b < 14){
    console.log("верно");
}else{
    console.log("Неверно");
}

console.log("");

console.log("задача 7");

let n = prompt("Введите число от 0 до 59, что-бы узнать четверть часа");
if(n < 15){
    console.log("первая");
}else if( n < 30){
    console.log("вторая");
}else if(n < 45){
    console.log("третья");
}else{
    console.log("четвертая");
}

console.log("");

console.log("задача 8");
let day = prompt("Введите число от 1 до 31")
if( day < 10){
    console.log("первая декада");
}else if( day < 20 ){
    console.log("вторая декада");
}else{
    console.log("третья декада");
}

console.log("");

console.log("задача 9");

let days = prompt('введите количиство дней');

let year = days / 365;
if(year < 1){
    console.log("Меньше года");
}
let month = days / 31;
if( month < 1){
    console.log("Меньше месяца");
}
let week = days / 7;
if( week < 1){
    console.log("Меньше месяца");
}
let hours = days * 24;
let minute = days * 1440;
let second = days * 86400;

console.log("");

console.log("задача 10");

let season = Math.floor(days/31);

switch(season){
    case 0:
    console.log(1);
    console.log("зима");
    break;
    case 1:
    console.log(2);
    console.log("зима");
    break;
    case 2:
    console.log(3);
    console.log("весна");
    break;
    case 3:
    console.log(4);
    console.log("весна");
    break;
    case 4:
    console.log(5);
    console.log("весна");
    break;
    case 5:
    console.log(6);
    console.log("лето");
    break;
    case 6:
    console.log(7);
    console.log("лето");
    break;
    case 7:
    console.log(8);
    console.log("лето");
    break;
    case 8:
    console.log(9);
    console.log("осень");
    break;
    case 9:
    console.log(10);
    console.log("осень");
    break;
    case 10:
    console.log(11);
    console.log("осень");
    break;
    case 11:
    console.log(12);
    console.log("зима");
    break;
}
