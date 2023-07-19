class Cart {
    constructor(){
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        this.cart = [];
        this.cartContainer = document.createElement('div');
        this.cartContainer.classList.add('container');
        this.init = this.init.bind(this);
        this.addCart = this.addCart.bind(this);
        this.getStateItem = this.getStateItem.bind(this);
        this.openRemoveItem = this.openRemoveItem.bind(this);
        this.getStorage();
    }
    setStorage(){
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    getStorage(){
        let cart = localStorage.getItem('cart');
        if(cart){
            this.cart = JSON.parse(cart);
        }
    }

    getStateItem(id){
        if(!this.cart.length) return false;
        let flag = this.cart.some(item => item.id === id);
        return flag;
    }

    addCart(item){
        item = {count: 1, ...item};
        
        this.cart.push(item);
        this.widget.innerHTML = `
            <a href="#cart">${this.cart.length}</a>
        `;
        this.setStorage();
        return true;
        
    }

    getWget(){
        let conuter = this.cart.length;

        this.widget.innerHTML = `
            <a href="#cart">${conuter}</a>
            
        `;

        return this.widget;
    }

    removeItemCart(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.render();
        this.setStorage();
    }

    openRemoveItem(id){
        this.cart = this.cart.filter(item => item.id !== id);
        this.getWget();
        this.setStorage();
    }

    changeCount(id, count = 0, flag = false){
        this.cart = this.cart.map(item => {
            if(item.id === id){
                if(!count){
                    if(flag){
                        item.count += 1;
                        return item;
                    }else{
                        if(item.count > 1){
                            item.count -= 1;
                            return item;
                    }else{
                        return item
                    }
                }
            }else{
                item.count = +count;
                return item;
            }
            }else{
                return item;
            }
            });
        this.render();
        this.setStorage();
    }

    totalPrice(){
        let price = this.cart.reduce((price, item) => price += item.price * item.count, 0);
        let h2 = document.createElement('h2');
        h2.innerText = `Итоговая сумма: ${price}`
        return h2;
    }

    render(){
        if(!this.cart.length){
            this.cartContainer.innerHTML = '<h2>Корзина пуста</h2>';
            return;
        }
        this.cartContainer.innerHTML = '';
        this.cart.forEach(item => {
            const cartElem = document.createElement('div');
            cartElem.classList.add('cart__item');
            cartElem.innerHTML = `
                <div class="img">
                    <img src="${item.image}" alt="#"/>
                </div>
                <h3 class="item__title">${item.title}</h3>
                <p class='price'>${item.price * item.count}</p>
            `;

            let controlContainer = document.createElement('div');
            controlContainer.classList.add('controll');

            let counter = document.createElement('div');
            counter.classList.add('counter');

            let btnMinus = document.createElement('button');
            let btnPlus = document.createElement('button');
            let input = document.createElement('input');
            input.value = item.count;
            input.setAttribute('type', 'text');

            btnPlus.innerText = '+';
            btnMinus.innerText = '-'

            counter.append(btnMinus, input, btnPlus)

            btnPlus.addEventListener('click', () => this.changeCount(item.id, 0, true));
            btnMinus.addEventListener('click', () => this.changeCount(item.id));
            input.addEventListener('input', () => this.changeCount(item.id, +input.value));


            let buttonRemove = document.createElement('button');
            buttonRemove.setAttribute('class', 'button_remove')
            buttonRemove.innerText = 'Remove';
            buttonRemove.addEventListener('click', () => {
                this.removeItemCart(item.id)
                this.getWget();
            });
            controlContainer.append(counter, buttonRemove)
            cartElem.append(controlContainer);
            this.cartContainer.append(cartElem)
        })
        this.cartContainer.append(this.totalPrice());
    } 

    

    init(){
        this.render();
        return this.cartContainer;

    }
}

let cart = new Cart();
export const widget = cart.getWget();
export const addCart = cart.addCart;
export const getStateItem = cart.getStateItem;
export const openRemoveItem = cart.openRemoveItem;
const init = cart.init;
export default init;