class Cart {
    constructor(){
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        this.cart = [];
        this.cartContainer = document.createElement('div');
        this.cartContainer.classList.add('container');
        this.init = this.init.bind(this);
        this.addCart = this.addCart.bind(this);
    }

    addCart(item){
        this.cart.push(item);
        this.widget.innerHTML = `
            <a href="#cart">${this.cart.length}</a>
        `;
        return true;
    }

    getWget(){
        let conuter = this.cart.length;

        this.widget.innerHTML = `
            <a href="#cart">${conuter}</a>
        `;

        return this.widget;
    }

    render(){
        if(!this.cart.length){
            this.cartContainer.innerHTML = '<h2>Корзина пуста</h2>';
            return;
        }
        this.cart.forEach(item => {
            const cartElem = document.createElement('div');
            cartElem.classList.add('cart__item');
            cartElem.innerHTML = `
                <div class="img">
                    <img src="${item.image}" alt="#"/>
                </div>
                <h3 class="item__title">${item.title}</h3>
                <p class='price'>${item.price}</p>
            `;
            this.cartContainer.append(cartElem)
        })
    } 

    init(){
        this.render();
        return this.cartContainer;

    }
}

let cart = new Cart();
export const widget = cart.getWget();
export const addCart = cart.addCart;
const init = cart.init;
export default init;