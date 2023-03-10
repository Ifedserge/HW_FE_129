const tabs = selector =>{
    const tabsContainer = document.querySelectorAll(selector);

    const contantHandler = (contents, index) => {
        contents.forEach((content, i) => {
            if (i === index){
                content.classList.add('active');
            }else{
                content.classList.remove('active');
            }
        });
    }

    const tabsHandler = (buttons, contents)=>{
        buttons.addEventListener('click', event => {
            let button = event.target;
            if (button.tagName !== 'LI') return;
            [...buttons.children].forEach((btn, i) =>{
                if (btn === button){
                    btn.classList.add('active');
                    contantHandler([...contents.children], i);
                }else{
                    btn.classList.remove('active')
                }
            })
        })

    }

   

    [...tabsContainer].forEach(tab =>{
        const buttons = tab.querySelector('.cards');
        const content = tab.querySelector('.cards__content')

        tabsHandler(buttons, content);
    })
}

tabs('.tabs');

// const btnTab = () =>{
//     const button = document.querySelector('.btn_tab');

//     const addTab = () =>{
//         button.addEventListener('clik', event =>{
//             const cards = document.querySelector('.cards');
//             cards.createElement('li');
//             cards.classList.add('.card');
//             cards.innerHTML = alert('Название карточки?')
//         })
//     }
//     addTab()
// }
const btnTab = selector =>{
    const button = document.querySelectorAll(selector);

    const addTab = btn =>{
        btn.addEventListener('click', event =>{
            const cards = document.querySelector('.cards');
            // cards = event.target;
            cards.createElement('li');
            cards.classList.add('.card');
            cards.innerHTML = alert('Название карточки?')
        })
    }
    [...button].forEach(tab =>{
        const btn = tab.querySelector('.btn_tab');

        addTab(btn);
    })
}
btnTab('tabs');