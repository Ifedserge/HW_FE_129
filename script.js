console.log("1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.");
console.log('Результат');

let str1 = 'aaa@bbb@ccc';
console.log(str1.replace(/@/g, "!"));

console.log('');
console.log("2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.");
console.log('Результат');
let date = '2025-12-31';

let arrDate = date.split('-');
let arrDateRev = arrDate.reverse()

console.log(arrDateRev[0] + '/' + arrDateRev[1] + '/' + arrDateRev[2]);

console.log('');
console.log("3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).");
console.log('Результат');

let str3 = 'Я учу javascript!'
console.log(str3.substr(2, 3));
console.log(str3.substring(2, str3.length-1));
console.log(str3.slice(6, 16));

console.log('');
console.log('4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.');
console.log('Результат');

let arr4 = [4, 2, 5, 19, 13, 0, 10]
let sumCube = 0

for(let i = 0; i < arr4.length; i++){
    let cube = Math.pow(arr4[i], 3)
    sumCube += cube;
}

console.log(Math.sqrt(sumCube));

console.log('');
console.log('5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.');
console.log('Результат');

let a = 3, b = 5, c = a - b;
if (c < 0){
    c = String(c)
    c = c.replace('-', '')
    console.log(+c)
}else{
    console.log(c);
}

console.log('');
console.log('6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).');
console.log('Результат');

function time(){

    let d = new Date();
    let time = d.getHours() + '.' + d.getMinutes() + '.' + d.getSeconds()
    let day = d.getDate();
    let mounth = d.getMonth();
    let year = d.getFullYear();

    if( day < 10){
        let dayStr = String(day);
        day =  dayStr.padStart(2, 0);
    }
    if (mounth < 10){
        let mounthStr = String(mounth);
        mounth = mounthStr.padStart(2, 0)
    }
    console.log(time + ' ' + day + '.' + mounth + '.' + year);
}
time();

console.log('');
console.log('7. Дана строка "a aba abba abbba abca abea". Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква "a", буква "b" любое количество раз, буква "a"');
console.log('Результат');


let str7 = 'a aba abba abbba abca abea';
console.log(str7.search(/aba/g));
console.log(str7.search(/abba/g));
console.log(str7.search(/abbba/g));


console.log('');
console.log('8. Напишите функцию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.');
console.log('Результат');
let num = "+3755";
function number(a){
    // let a= +375291112211;
    let regexp = /[+][375]/gi;
    console.log(regexp.test(num));
}
number(num);

console.log('');
console.log('9. Напишите функцию строгой проверки адреса эл. почты с учетом следующих условий:');
console.log('Результат');

function mail(a){
    let email = 'mail@mail.ru';
    let regexp = /[a-z0-9]@[a-z].[a-z]{2, 11}/gi
    return console.log(regexp.test(email));
}
mail();