// import {nav} from './Nav.js'
class Footer{
    constructor(){
        this.element = null;
    }


    create(){
        this.element = document.createElement('footer');
        this.element.classList.add('footer');
        this.element.innerHTML = `
            <div>
                <p>Полезная информация</p>
                <p>Очень полезная информация</p>
            </div>
        `
        
    }

    init(){
        this.create();
        return this.element;
    }
};

const footer = new Footer().init();
export{footer};