const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(todos));
}

function DeleteToDo(event){
    const li = event.target.parentElement;
    todos = todos.filter(toDo => toDo.id !== parseInt(li.id)); 
    li.remove();
    saveTodos();
}

function paintToDo(newToDo){
    const todo_li = document.createElement("li");
    todo_li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",DeleteToDo);
    todo_li.appendChild(span);
    todo_li.appendChild(button);
    todoList.append(todo_li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    todos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveTodos();
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if(savedTodos){
    const parseToDos = JSON.parse(savedTodos);
    todos = parseToDos;
    parseToDos.forEach(paintToDo);
}