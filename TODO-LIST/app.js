// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');



// EVENT LISTENER
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);



// FUNCTIONS
function addTodo(e){
    e.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement("div");
    // add class
    todoDiv.classList.add("todo")

    // create LI
    const newToDo = document.createElement("li");
    newToDo.innerText = todoInput.value;
    newToDo.classList.add("todo-item");
    todoDiv.appendChild(newToDo);

    // checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // APPEND to LIst
    todoList.appendChild(todoDiv);

    // clear Todo Input value
    todoInput.value = '';
}

function deleteCheck(e){
 const item = e.target;

    //  DELETE
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // for animation
        todo.classList.add("fall")

        todo.addEventListener('transitionend', function (){
            todo.remove()
        })
    }

    // CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
} 


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
            console.log(`all`)
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
            console.log(`completed true`)
          } else {
            todo.style.display = "none";
            console.log(`completed false`)
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
            console.log(`uncompleted true`)
          } else {
            todo.style.display = "none";
            console.log(`uncompleted true`)
          }
      }
    });
  }



  let items = [ 
    {
      name: 'a name',
        description: 'a descrtiption'
     },
    {
      name: '2 name',
        description: '2 descrtiption'
     },
     {
        name: 'a name',
          description: 'a descrtiption'
       },
      {
        name: '2 name',
          description: '2 descrtiption'
       }
  ]


  for (let i = 0; i<items.length; i++) {
      console.log(`
          Name: ${items[i].name}
          Description: ${items[i].description}
      `)
  }


  function div(dividend, dividend) {
    if (dividend % dividend == 0) {
        console.log(`divisible`)
    } else {
        console.log(`not`)
    }
  }

  div(100, 0)
  div(16, 0)
  div(8, 0)
                  
