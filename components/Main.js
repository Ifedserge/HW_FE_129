
import router from "./router.js";


class Main {
    constructor(){
        this.element = null;
    };
    
    async create(){
        this.element = document.createElement('main');
        this.element.classList.add('main');

        const render = async () => {
            this.element.innerHTML = '';
            let [module, id] = await router()
            this.element.append(module(id));
            
        }
        
        window.addEventListener('load', render)

        window.addEventListener('hashchange', render);

        

    };
    init(){
        this.create();
        return this.element;
        
    };
}


const main = new Main().init();
export {main};

