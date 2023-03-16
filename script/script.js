console.log('4. Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл. двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад (ввод информации о скорости движения), расчет пройденных километров.');

let Car = function (){
    this.marka = prompt('Введите марку автомобиля');
    // this.model = prompt('Введите модель');
    // this.rashod = +prompt('Укажите средний расход на 100км');
    // this.get = function (){
    //     this.way = +prompt('Укажите растояние');
    //     this.price = +prompt('Сколько стоит топливо?')
    //     this.resultLitr = this.way / 100 * this.rashod

    //     this.resultMoney = this.resultLitr * this.price
    //     alert("Израсходавано топлива " + this.resultLitr);
    //     alert("Стоимость " + this.resultMoney);
    // }
}

// let car = new Car()
// car.get();

let Moto = function(marka){
    Car.apply(this, arguments);
    
    this.newElem = function(tag){
        let body = document.querySelector('body')
       let elem = document.createElement(tag);
    //    elem.innerHTML = this.marka
       body.appendChild(elem)
    }
    this.attr = function(tag, attribute, value){
        if(!tag) return;
        let elem = document.querySelector(tag);
        elem.setAttribute(attribute, value);
    }
    this.html =  function(tag, text){
        if(!tag) return console.log('Ощибка, такого нет');
        let elem = document.querySelector(tag);
        elem.innerHTML = text;
    }
    this.addClass = function(tag, className){
        if(!tag) return console.log('Ощибка, такого нет');
        let elem = document.querySelector(tag);
        elem.classList.add(className)
    }
    this.removeClass = function(tag, className){
        if(!tag) return console.log('Ощибка, такого нет');
        let elem = document.querySelector(tag);
        if(!elem.classList.contains(className)) return console.log('Ощибка, такого класса нет!');
        elem.classList.remove(className)
    }
    this.toggleClass = function(tag, className){
        if(!tag) return console.log('Ощибка, такого нет');
        let elem = document.querySelector(tag);
        elem.classList.toggle(className);
    }
    this.hasClass = function(tag, className){
        if(!tag) return console.log('Ощибка, такого нет');
        let elem = document.querySelector(tag);
        if (!elem.classList.contains(className)){
            return false, console.log('false');;
        }else{
            return true, console.log("true");;
        }
    }
}


let moto = new Moto();

moto.newElem('h1');
moto.attr('h1', 'href', '#');
moto.html('h1', 'Hello ');
moto.addClass('h1', 'title');
moto.addClass('h1', 'titleH1');
moto.removeClass('h1', 'title');
moto.toggleClass('h1', 'rem')
moto.hasClass('h1', 'rem')
console.log(moto);