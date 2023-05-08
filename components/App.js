import {header} from './Header.js';
import {main} from './Main.js'
import {footer} from './Footer.js'


import router from './router.js';


class App {
    constructor(){
        this.element = null;
    };

   
    async getData(){

        let products = localStorage.getItem('products');
        if(!products){
            const response = await fetch('https://fakestoreapi.com/products');
            products = await response.json();
            localStorage.setItem('products', JSON.stringify(products));
        }else{
            products = JSON.parse(products);
        }
        return products;
        
    }
    async getItem(id){
        let products = localStorage.getItem('products');    
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if(!response.ok){
            products = await response.json();
            localStorage.setItem('products', JSON.stringify(products));
        }else{
            products = JSON.parse(products);
        }
        return products;
    }

    create(){
        this.element = document.createElement('div');
        this.element.classList.add('app');
    };
    render(){
        let body = document.querySelector('body')
        body.append(this.element);

        let html = document.querySelector('html');
        html.setAttribute('lang', 'en');

        this.element.append(header, main, footer);
    
    };
    init(){
        this.create();
        this.render();
        
        (async () =>{
            const data = await this.getData();
            
        })();
        

        document.querySelector('head').innerHTML = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Online Shop</title>
        <link rel="stylesheet" href="./style/style.css">
        `;
    }; 
};



export default new App().init();

let dataApp = new App().getData();
let getItem = new App().getItem();
export {dataApp};
export {getItem};