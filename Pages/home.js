// import { addCart, getStateItem } from './cart.js'
import { addButton } from '../components/button.js';

class Home{
    constructor(){
        this.main = document.querySelector('.main');
        this.init = this.init.bind(this);
    };

    async create(){
        let catalog =  document.createElement('div');
        catalog.classList.add('catalog');
        this.main.append(catalog);

        let catalogContainer = document.createElement('div')
        catalogContainer.classList.add('catalog__container');
        catalog.append(catalogContainer);

        let wraper = document.createElement('div');
        wraper.classList.add('catalog__container-wraper');
        catalogContainer.append(wraper);

        let catalogCard = document.createElement('div');
        catalogCard.classList.add('catalog__cards');
        wraper.append(catalogCard);

        let products = localStorage.getItem('products');
        products = JSON.parse(products);

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('catalog__card')
            productDiv.innerHTML = `
                <img src="${product.image}" alt='#'>
                <h3>
                    <a href="#product/${product.id}">${product.title}</a>
                </h3>
                <p>${product.price}</p>
            `;
            catalog.append(productDiv);      

        productDiv.append(addButton(product))
        })

        return this.main;

    }
    init(){
        this.create();
    }
}

let home = new Home();
const create = home.init;
export default create;
