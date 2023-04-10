class User{
    constructor(data){
        this.data = data;
    };

    edit(obj){
        Object.assign(this.data, obj);
    };
    get(){
        return this.data;
    };
};


class Contacts {
    constructor(){
        this.contact = []
    };

    add(data){
        if(!data.name) return;

        let user = new User()
        user.data = data;
        let id = this.getRandomId();
        user.edit({ id });

        this.contact.push(user);
    }

    getRandomId(){
        let id = Math.floor(Math.random() * 100);

        let flag = this.contact.some(user => user.data.id === id)
        if(flag){
            return this.getRandomId()
        }else{
            return id;
        }
    }

    edit(id, obj){
        // let user = this.data.find((user) => user.id !== id);
        // if(user){
        //     user.edit(obj)
        // }
        this.contact.forEach(user => {
            if(user.data.id === id) {
                user.edit
            }
        })
    }

    remove(id){
        this.contact = this.contact.filter(user => user.data.id !== id);
    }

    get(){
        return this.contact;
    }
}

class ContactsApp extends Contacts{
    constructor(selector){
        super();
        this.app = document.createElement('div');
        this.app.classList.add('contacts');
        document.body.appendChild(this.app);
        this.interface(selector);

       

    };
  
    async interface(selector){

        let form = document.createElement('form');
        form.classList.add('form');

        let inputName = document.createElement('input');
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('placeholder', 'Имя');

        let inputNumber = document.createElement('input');
        inputNumber.setAttribute('type', 'text');
        inputNumber.setAttribute('placeholder', 'Телефон');

        let inputMail = document.createElement('input');
        inputMail.setAttribute('type', 'text');
        inputMail.setAttribute('placeholder', 'Email');

        let inputAddress = document.createElement('input');
        inputAddress.setAttribute('type', 'text');
        inputAddress.setAttribute('placeholder', 'Адрес');

        let buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('type', 'submit');
        buttonAdd.innerText = 'Добавить контакт';

        this.contactContainer = document.createElement('div');
        this.contactContainer.classList.add('contact__Container')


        form.addEventListener('submit', event =>{
            event.preventDefault();

            let name = inputName.value;
            let phone = inputNumber.value;
            let email = inputMail.value;
            let address = inputAddress.value;

            this.add({name, phone, email, address})

            inputName.value = '';
            inputNumber.value = '';
            inputMail.value = '';
            inputAddress.value = '';

            console.log(this.contact);
            this.render();

            this.storage = this.contact;
        })

        form.append(inputName, inputNumber, inputMail, inputAddress, buttonAdd);
        this.app.append(form, this.contactContainer);

        if(this.storage){
            let data = this.storage;
            data.forEach(note =>{
                Object.keys(note).forEach(key => this.add(note[key]));
            })
            this.render();
        }else{
            let data = await this.getData();
            data.forEach(note =>{
               this.add(note);
            });
            this.storage = this.contact;
            this.render();
        }
    }

    render(){
        this.contactContainer.innerHTML = '';
        this.contact.forEach(user => {
            let flag = true;

            let contactContainer = document.createElement('div');
            contactContainer.classList.add('.contact__Container');

            let nameContact = document.createElement('h2');
            nameContact.classList.add('nameContact');
            nameContact.innerText = user.data.name;

            let numbContact = document.createElement('p');
            numbContact.classList.add('numbContact');
            numbContact.innerText = user.data.phone;

            let mailContact = document.createElement('p');
            mailContact.classList.add('mailContact');
            mailContact.innerText = user.data.email;

            let addressContact = document.createElement('p');
            addressContact.classList.add('addressContact');
            addressContact.innerText = user.data.address;

            let del = document.createElement('button');
            del.classList.add('del');
            del.innerText = 'Delete';
            del.addEventListener('click', ()=> {
                this.onRemove(user.data.id);
            });

            let edit = document.createElement('button');
            edit.classList.add('edit');
            edit.innerText = 'Редактировать';
            edit.addEventListener('click', ()=>{
                if(flag){
                    nameContact.contentEditable = true;
                    numbContact.contentEditable = true;
                    mailContact.contentEditable = true;
                    addressContact.contentEditable = true;
                    edit.innerText = 'Сохранить';
                    flag = !flag;
                }else{
                    let data = {
                        name: nameContact.innerText,
                        phone: numbContact.innerText,
                        email: mailContact.innerText,
                        address: addressContact.innerText,
                    }
                    nameContact.contentEditable = false;
                    numbContact.contentEditable = false;
                    mailContact.contentEditable = false;
                    addressContact.contentEditable = false;

                    super.edit(user.data.id, data);
                    edit.innerText = 'Редактировать';
                    flag = !flag;
                    this.storage = this.contact; /* вроде тут надо добавить*/
                }


                
            });


            contactContainer.append(nameContact, numbContact, mailContact, addressContact, edit, del);
            this.contactContainer.append(contactContainer);
        });
    }

    onRemove(id) {
        super.remove(id);
        this.render();
    }

    set storage(data){
        let json = JSON.stringify(data);
        localStorage.setItem('contact', json);

        this.cookie = 864000;

    };
    get storage(){
        if(!localStorage.getItem('contact')) return false;

        if(!this.cookie){
            localStorage.removeItem('contact');
            return falses; 
        }

        let data = localStorage.getItem('contact');
        data = JSON.parse(data);
        return data;
    };

    get cookie() {
        let name = 'contact';
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
          return matches || false;
    }

    set cookie(time){
        let name = 'contact';
        let value = 'contact'; 

        let options = {
            path: '/',
            secure: true,
            'max-age': time
          };
        
          if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
          }
        
          let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        
          for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
              updatedCookie += "=" + optionValue;
            }
          }
        
          document.cookie = updatedCookie;
    }

    async getData(){
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    }
};

new ContactsApp();