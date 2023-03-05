const tabs = (selcector) => {
    const tabContainer = document.querySelectorAll(selcector);

   
    const tabsHandler = (buttons, contents)=>{
        buttons.addEventListener('click', event => {
            let button = event.target;
            if (button.tagName !== 'DIV') return;
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

    const contantHandler = (contents, index) => {
        contents.forEach((content, i) => {
            if (i === index){
                content.classList.add('active');
            }else{
                content.classList.remove('active');
            }
        });
    }

    [...tabContainer].forEach(tab =>{
        const buttons = tab.querySelector('.cards');
        const content = tab.querySelector('.content');

        tabsHandler(buttons, content)
    })

}
tabs('.container');