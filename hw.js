


class User{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone
    }
    set edit(obj){
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.address = obj.address;
        this.phone = obj.phone;
    }
    get get(){
        return ('ID: ' + this.id + ', Name: ' + this.name + ', Email: ' + this.email + ', Address: ' + this.address)
    }
};

class Contacts {
   data = [];

   add() {
        let newUser = new User();
        this.data.push(newUser);
   }
}



let alex = new User ({name: 'Alex', email: 'alex@gmail.com'});
console.log(alex);
// console.log(alex.getPermissions());
console.log(Contacts);
