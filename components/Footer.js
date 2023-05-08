// import {nav} from './Nav.js'
class Footer{
    constructor(){
        this.element = null;
    }


    create(){
        this.element = document.createElement('footer');
        this.element.classList.add('footer');

        
    }

    init(){
        this.create();
        return this.element;
    }
};

const footer = new Footer().init();
export{footer};