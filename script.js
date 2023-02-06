console.log("Задача 1");
console.log("");

let arrOne = [1, 2, 3, 4, 5];

for(let i = 0; i <arrOne.length; i++ ){
    console.log(arrOne[i]);
}

console.log("");
console.log("Задача 2");
console.log("");

let arrTwo = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0; i < arrTwo.length; i++){
    if(arrTwo[i] > -10 && arrTwo[i] < -3){
        console.log(arrTwo[i])
    }else{
        continue;
    }
}

console.log("");
console.log("Задача 3");
console.log("");

console.log("метод while")

let arrThreeWhile = [];
let q = 23;
let w = 0
while( q <= 57){
    console.log(arrThreeWhile[w] = q);
    w++
    q++
}

console.log("");

console.log("метод for")
let arrThreeFor = []
let result = 0;
for(let i = 23; i <= 57; i++){
    let e = 0
    console.log(arrThreeFor[e] = i);
    result += arrThreeFor[e];
    e++
    
}
console.log(result);


console.log("");
console.log("Задача 4");
console.log("");

let arrFour = ['10', '20', '30', '50', '235', '3000'];

for( let i = 0; i < arrFour.length; i++){
    let x = arrFour[i];
    if(x[0] == 1 || x[0] == 2 || x[0] == 5){
        console.log(x);
    }
}

console.log("");
console.log("Задача 5");
console.log("");

let arrFive = ['Пн', "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
for(let i = 0; i < arrFive.length; i++){
    let x = arrFive[i]
    
    if( x == "Сб" || x == "Вс"){
        console.log(x.bold());
    }else{
        console.log(x);
    }
}

console.log("");
console.log("Задача 6");
console.log("");

let arrSix = ['This ', 'is ', 'Sparta!'];

arrSix.push("!!!");
console.log(arrSix[arrSix.length-1]);

// console.log("");
// console.log("Задача 7");
// console.log("");

// let arrSeven =[];
// let number = 0;

// while(1){
//     let a = +prompt("Введите строго число!");
//     if(isNaN(a)){
//         alert("Введено не число");
//         continue
//     }
//     if (a === ''){
//         break
//     }

// }

console.log("");
console.log("Задача 8");
console.log("");

let arrEight = [12, false, 'Текст', 4, 2, -5, 0];
let arrEightReverse = arrEight.reverse()

let r = 0;
while(r < arrEight.length-1){
    console.log(arrEightReverse[r])
    r++
}


console.log("");
console.log("Задача 9");
console.log("");

let arrNine = [5, 9, 21, , , 9, 78, , , , 6];
let y = 0;
for(let i = 0; i < arrNine.length; i++){
    let x = arrNine[i];
    
    if(x === undefined){
        y += 1
    }
    
}
console.log(y)
