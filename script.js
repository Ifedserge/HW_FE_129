// let carFord = {
//     model: 'Ford',
//     color: 'Red',
//     doors: 2
// };
// console.log(carFord);

// let Car = function(data){
//     this.model = data.model;
//     this.color = data.color;
//     this.doors = data.doors;

//     this.showModel = function() {
//         return this.model;
//     }
// };

// let carOpel =  new Car({
//     model: 'Opel',
//     color: 'green',
//     doors: 4,
// });
// let carBMW =  new Car({
//     model: 'BMW',
//     color: 'black',
//     doors: 4,
// });
// console.log(carOpel);
// console.log(carBMW);

// class Car2 {
//     constructor(data){
//         this.model = data.model;
//         this.color = data.color;
//         this.doors = data.doors;
        
//     }
//     showModel() {
//         return this.model;
//     }
// };

// let carBenz =  new Car2({
//     model: 'Benz',
//     color: 'silver',
//     doors: 2,
// });
// console.log(carBenz);

// function f1(){
//     console.log('f1');
// };
// function f2(){
//     console.log('f2');
// };
// function f3(){
//     console.log('f3');
// };

// class Dom{
//     static create(type){
//         return document.createElement(type)
//     }

//     static searh(selector){
//         return document.querySelectorAll(selector)
//     }

//     static insert(to, element, beforeElemnt){
//         if(!to || !element) return false;

//         if(!beforeElemnt) to.appendChild(element);
//         else to.insertBefore(element, beforeElemnt);
//     }
// }

// // console.log(Dom.create('h1'));

// let elemH1 = Dom.create('h1');
// elemH1.innerHTML = 'Main';
// Dom.insert(document.body, elemH1);

// let User = function(){
//     this.type = "User";

//     this.showType = function(){
//         console.log(this.type);
//     }
// };

// class Admin {
//     #type = 'Admin';

//     static showType(){
//         console.log(this.#type);
//     }
// };

// console.dir(User);
// console.dir(Admin);

// let user = new User();
// let admin = new Admin()

// console.dir(user);
// console.dir(admin);

// console.log(user.type);
// console.log((admin.type));

// let Animal = function(name, eats, walk){
//     this.name = name;

//     this.eats = eats;
//     this.walk = walk;

//     this.showName = function(){
//         alert(this.name);

//     };
// };
// let Dog = function(name){
//     Animal.apply(this, arguments);
//     this.name = name;

//     this.showName = function(){
//         alert('Dog name is '+ this.name)
//     };
// };

// let dog = new Dog('Bob', true, true);
// console.log(dog);

class Animal {
    constructor(data){
        this.name = data.name;
        this.eat = data.eat;
    };
    showName() {
        console.log(this.name);
    };
};

let animal = new Animal({name: "Animal", eat: false});

// console.log(animal);

class Dog extends Animal {
    constructor(data){
        super(data);
        this.speak = true;
        this.walk = true;
    };
    bark(){
        console.log('gaw');
    }
};
let dogBob = new Dog({name: 'Dog Bob', eat: true});
// console.log(dogBob);
// dogBob.showName();
// dogBob.bark();

// class User {
//     constructor(data){
//         this.name = data.name;
//         this.email = data.email;

//         this.permissions = {
//             view: true,
//             buy: false,
//             create: false,
//             update: false,
//             delete: false,
//         };
//     };

//     get info(){
//         return this.name + '(' + this.email + ')';
//     };
//     set info(data) {
//         this.name = data.name;
//         this.email = data.email;
//     }

//     view() {
//         if(this.permissions.view) console.log(this.name + ': Просмотр страниц')}

//     create() {
//         if(this.permissions.create) console.log(this.name + ': Создание страниц')}

//     update() {
//         if(this.permissions.update) console.log(this.name + ': Обновление страниц')}

//     delete() {
//         if(this.permissions.deleta) console.log(this.name + ': Удаление страниц')}

//     buy() {
//         if(this.permissions.buy) console.log(this.name + ': Покупка товара')}

//     getPermissions() {
//         return this.permissions;
//     }
    
// };

// class Buyer extends User {
//     constructor(data){
//         super(data);
//         this.permissions.buy = true;
//     }
// };

// class Editor extends User {
//     constructor(data){
//         super(data);
//         this.permissions.create = true;
//         this.permissions.update = true;
//     }
// };

// class Admin extends User {
//     constructor(data){
//         super(data);

//         this.permissions.buy = true;
//         this.permissions.delete = true;
//         this.permissions.create = true;
//         this.permissions.update = true;
//     };

//     create(){
//         super.create();
//         console.log(this.name + ': Дополнительные возможности по созданию страниц');
//     }

//     update(){
//         super.update();
//         console.log(this.name + ': Дополнительные возможности по обновлению страниц');
//     }

//     delete(){
//         super.delete();
//         console.log(this.name + ': Дополнительные возможности по удалению страниц');
//     }
// };

// let alex = new User ({name: 'Alex', email: 'alex@gmail.com'});
// console.log(alex);
// console.log(alex.getPermissions());
// console.log(alex.info);

// let bob = new Buyer({ name: 'Bob', email:'bob@gmail.com'});
// console.log(bob.info);
// console.log(bob.getPermissions());

// let mike = new Editor ({name: 'Mike', email: 'mike@gmail.com'});
// console.log(mike.info);
// console.log(mike.getPermissions());

// let robert =  new Admin({name: 'Robert', email: 'robert@gmail.com'});
// console.log(robert.info);
// console.log(robert.getPermissions());
// alex.create();
// bob.view();
// mike.create();
// mike.update();

// robert.view();
// robert.buy();
// robert.create();
// robert.update();
// robert.delete();