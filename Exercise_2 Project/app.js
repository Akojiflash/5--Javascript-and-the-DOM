const form = document.getElementById('form');
const input = document.getElementById('input');
const todoList = document.getElementById('todos');
const todoLocalStorage = JSON.parse(localStorage.getItem('todoList'));
const todoListItem = [{ text: [] },
{ completed: [] }];

function checkLocalStorage(todo) {
    if (todo) {
        for (let i = 0; i < todo[0]['text'].length; i++) {
            let li = document.createElement('li');
            li.textContent = todo[0]['text'][i];
            todoList.appendChild(li);
            todoListItem[0]['text'].push(li.textContent);

        }
        for (let i = 0; i < todo[1]['completed'].length; i++) {
            let li = document.createElement('li');
            li.setAttribute('class', 'completed');
            li.textContent = todo[1]['completed'][i];
            todoList.appendChild(li);
            todoListItem[1]['completed'].push(li.textContent);

        }

    }

}
//commands by user before clicking ENTER on the keyboard
checkLocalStorage(todoLocalStorage);
doneTask();
removeDoneTask();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();


});



function addTodo(todo) {

    let todoText = input.value;
    if (todo) {
        todoText = todo.textContent;

    }

    if (todoText) {
        let li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
        input.value = '';
        todoListItem[0]['text'].push(li.textContent);


    }

    doneTask();
    removeDoneTask();
    updateLS();

}
function doneTask() {
    let li = document.querySelectorAll('li');
    // let clickItem;
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', () => {
            li[i].setAttribute('class', 'completed');
            // clickItem = i;
            console.log(i);
            console.log(li[i].textContent);
            console.log(todoListItem[1]['completed'][i]);
            console.log(i);
            todoListItem[0]['text'].splice( todoListItem[0]['text'].indexOf(li[i].textContent), 1);
            if( !todoListItem[1]['completed'].includes(li[i].textContent)){
                todoListItem[1]['completed'].push(li[i].textContent);
                updateLS();
            }

        })
  
        

            
           
          
            
        
    }
    

}

function removeDoneTask() {
    let li = document.querySelectorAll('li');

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoList.removeChild(li[i]);
            let presentItem = li[i].textContent;
            console.log(li[i].textContent);


            if (todoListItem[0]['text'].includes(presentItem)) {
                todoListItem[0]['text'].splice(todoListItem[0]['text'].indexOf(presentItem), 1);

                updateLS();

            } else if (todoListItem[1]['completed'].includes(presentItem)) {
                todoListItem[1]['completed'].splice(todoListItem[1]['completed'].indexOf(presentItem), 1);
                updateLS();
            }

        })
    }


}


function updateLS() {
   
    localStorage.setItem('todoList', JSON.stringify(todoListItem))
}
