// console.log('1. Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.');


// let Calc = function(){
//     let power = prompt('Включить калькулятор? on/off')
//     if(power == 'on' || power === true){
//         this.get = function(){
//             this.a = +prompt('Введите число "А"');
//             this.b = +prompt('Введите число "b"');
//             this.oper = prompt('введите операцию (+/-/*///)')
    
//             this.operation();
//         }
//         this.operation = function(){
//             switch(this.oper){
//                 case '+':
//                     this.result = this.a + this.b;
//                 break;
//                 case '-':
//                     this.result = this.a - this.b;
//                 break;
//                 case '*':
//                     this.result = this.a * this.b;
//                 break;
//                 case '/':
//                     this.result = this.a / this.b;
//                 break;
//                 default: this.result = 0
//             }
//             this.show();
//         }
//         this.show = function(){
//             alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result )
//         }
//     }
// }

// let calc = new Calc();  
// // calc.get()

// console.log('2. Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки, счетчик горения лампочки.');

// let Lamp = function(){
//     this.get = function(){
//         this.powerWt = +prompt('Введите мощность лампочки в Вт');
//         this.time = prompt("Сколько часов работает лампочка")
//         this.rate = 0.1;
//         this.result = this.powerWt/1000 * this.time * this.rate;
//         alert(this.powerWt + this.time)   
//     }
        
// }
// let lamp = new Lamp();
// lamp.get()


console.log('4. Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл. двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад (ввод информации о скорости движения), расчет пройденных километров.');

let Car = function (){
    this.marka = prompt('Введите марку автомобиля');
    this.model = prompt('Введите модель');
    this.rashod = +prompt('Укажите средний расход на 100км');
    this.get = function (){
        this.way = +prompt('Укажите растояние');
        this.price = +prompt('Сколько стоит топливо?')
        this.resultLitr = this.way / 100 * this.rashod

        this.resultMoney = this.resultLitr * this.price
        alert("Израсходавано топлива " + this.resultLitr);
        alert("Стоимость " + this.resultMoney);
    }
}

let car = new Car()
car.get();