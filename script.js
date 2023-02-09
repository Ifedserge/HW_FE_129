console.log('1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.');
function abc(a, b, c){
    return (a - b) / c;
}
console.log(abc(10, 2, 2));

console.log('');
console.log("2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.");

function retCQ(a){
    return ('куб = ' + Math.pow(a, 3) + ' квадрат числа = ' + Math.pow(a, 2));
}
console.log(retCQ(3));

console.log("");
console.log('3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.');
function min(a, b){
    if(a < b) return a;
    else return b;
}
console.log(min(9, 6));

function max(a, b){
    if(a > b) return a;
    else return b;
}
console.log(max(1, 0));

console.log("");
console.log('4. Напишите две функции: первая ф-ция должна возвращать массив числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.');

let arr4 = [];
function getArrNumb(a, b){

var a = +prompt("Введите певрое число");
var b = +prompt("Введите второе число");
     for(let i = a; i <= b; i++){
        arr4.push(i);
     }
    return arr4;
}
console.log(getArrNumb());

function array(a){
    for(let i = 0; i < a.length; i++){
        console.log(a[i]);
    }
}

console.log(array(arr4));


console.log("");
console.log('5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.');
function isEven(a){
    return (a % 2 == 0) ? true : false;
    
}
console.log(isEven(4));

console.log("");
console.log('6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.');
let arr6 = [];
function exp6(r){
    for(let i = 0; i <= r.length; i++){
       if(isEven(r[i]) !== true) arr6.push(i);
    }
    return arr6
};
console.log(exp6(arr4));

console.log("");
console.log('9. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.');
let arr9 = [];
function numbFib(){
    
    for(let i = 0; i < 16; i++){
        arr9.push(i)
        if(arr9[i] == 0 || arr9[i] == 1){
            arr9[i] = 1;
        }else if(arr9[i] <= 1000){
            arr9[i] = arr9[i - 1] + arr9[i-2];
        }else{
            break
        }
    }
    return arr9;
}

    console.log(numbFib());