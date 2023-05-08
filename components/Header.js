import {nav} from './Nav.js';
import { widget } from '../Pages/cart.js';

class Header {
    constructor(){
        this.element = null;
    };

    create() {
        this.element = document.createElement('header');
        this.element.classList.add('header')

        let headerContainer = document.createElement('div');
        headerContainer.classList.add('header__container')
        this.element.append(headerContainer)

        let logo = document.createElement('div');
        logo.classList.add('logo');
        headerContainer.append(logo, nav, widget)

        let logoText = document.createElement('p');
        logoText.innerText = `Online Shop`
        logoText.classList.add('logo__text')
        logo.append(logoText);
    };
    init() {
        this.create()
        return this.element
    };
};
const header = new Header().init()
export { header }
// console.log(header);