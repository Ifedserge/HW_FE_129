console.log("Задание1");
let a = 0
while(a <= 50 ){
    console.log(a);
    a++
}

console.log("");

let b = 35;
while(b >= 8){
    console.log(b);
    b--
}

console.log("");
console.log("Задание 2");
let c = 89;
while(c >= 11){
    console.log(c);
    c--
}

console.log("");
console.log("Задание 3");
let sum = 0;
for(let d = 100; d >= 0; d--){

     sum += d;
    console.log(sum)
}

console.log("");
console.log("Задание 4");
let e = +prompt('Введите число от 1 до 5');

let sum4 = 0;
if(e < 1 || e > 5){
    console.log("не правильное число");
}else{
    for(let i = 0; i <= e; i++ ){
        sum4 += i;
    }
    console.log(sum4);
}

console.log("");
console.log("Задание 5");
for(let f = 8; f <= 56; f++){
    if( f % 2 == 0){
        console.log(f);
    }
}
console.log("");
console.log("метод while");
let f = 8;
while( f <= 56){
    if(f % 2 == 0){
        console.log(f);
    }
    f++
}


console.log("");
console.log("Задание 6");

for(let q = 2; q < 10; q++){
    for(let w = 1; w < 10; w++){
        console.log(`${q}*${w} = ${q*w}`);
    }
}

console.log("");
console.log("Задание 7(1)");

let num = 0;
for(let n = 1000; n > 50;  ){
   num = 0
    for(let k = 1; n > 50; k++){
        n /= 2;
        num = k;
        console.log(n);
    }
    console.log(num);
}
    
console.log("");
console.log("Задание 8(2)");


let srednee = 0;
let summa = 0;
let call = 0;
let numb;
while((numb = +prompt('Введите чило')) !== 0 && numb != ""){
    call++ 
    summa += +numb
    srednee = summa/call
    console.log(`Сумма = ${summa}, Среднее = ${srednee}`);
}
