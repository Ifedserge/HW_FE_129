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
    // search(target, selector){
    //     target  = target || document;
    //     return target.querySelector(selector);
    // }
    interface(selector){

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
            let number = inputNumber.value;
            let mail = inputMail.value;
            let address = inputAddress.value;

            this.add({name, number, mail, address})

            inputName.value = '';
            inputNumber.value = '';
            inputMail.value = '';
            inputAddress.value = '';

            console.log(this.contact);
            this.render();

        })

        form.append(inputName, inputNumber, inputMail, inputAddress, buttonAdd);
        this.app.append(form, this.contactContainer);

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
            numbContact.innerText = user.data.number;

            let mailContact = document.createElement('p');
            mailContact.classList.add('mailContact');
            mailContact.innerText = user.data.mail;

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
                        number: numbContact.innerText,
                        mail: mailContact.innerText,
                        address: addressContact.innerText,
                    }
                    nameContact.contentEditable = false;
                    numbContact.contentEditable = false;
                    mailContact.contentEditable = false;
                    addressContact.contentEditable = false;

                    super.edit(user.data.id, data);
                    edit.innerText = 'Редактировать';
                    flag = !flag;
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
}

new ContactsApp();