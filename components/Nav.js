class Nav{
    constructor() {
        this.element = null;
    }
    create(){
        this.element = document.createElement('nav');
        this.element.classList.add('nav');

        let ul = document.createElement('ul');
        const newLocal = ul.innerHTML = `
            <li><a href=''>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contacts">Contacts</a></li>
        `;
        this.element.append(ul)
    };
    init(){
        this.create()
        return this.element
    }   
};

const nav = new Nav().init();
export { nav };

