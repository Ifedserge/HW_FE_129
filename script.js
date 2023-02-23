window.addEventListener('load', function(){
    console.log('страница загружена');
    let list = document.querySelector('.list')

    let form = document.querySelector('.form form');
    form.addEventListener('submit', function(event){

        if(document.querySelector('input[name=task]').value === ''){
            event.preventDefault()
            console.log("add task");

        }else{
            let task = document.createElement('li')
            let textInput = document.querySelector('input[name=task]').value;
            task.classList.add('task');
            
            list.appendChild(task)
            task.innerHTML = textInput;
            event.preventDefault()
            event.target.reset()

            let redaction = document.createElement('span')
            
            task.appendChild(redaction);
            redaction.innerHTML = 'ред';

            let point = document.querySelectorAll('.task');
            point.forEach(function(element) {
                element.addEventListener('click', function(){
                        element.classList.toggle('active')
                    });
            })
            
            redaction.addEventListener('mousedown', function(event){
                if(event.ctrlKey){
                    task.innerHTML = prompt('Редактирование задачи')
                }
                
        })
        
        }

        
    })
});