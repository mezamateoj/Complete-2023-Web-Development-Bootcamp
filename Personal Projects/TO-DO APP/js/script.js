
// Add a todo
// set array where we will place the list items
const todoList = []

function todoNext(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };
    todoList.push(todo);
    renderTodo(todo);
}

// select the form element 

const form = document.querySelector('.js-form')

form.addEventListener('submit', event => {
    // prevent page refresh on form submission
    event.preventDefault();
    // select the text input
    const input = document.querySelector('.js-todo-input');

    const text = input.value.trim();
    if (text !== '') {
        todoNext(text);
        input.value = ''
        input.focus();
    }
});


// Render the todo items
function renderTodo(todo) {
    // select first element of the class ".js-todo-list"
    const list = document.querySelector('.js-todo-list');

    // Use the ternary operator to check if `todo.checked` is true
    // if so, assign 'done' to `isChecked`. 
    // Otherwise, assign an empty string
    const isChecked = todo.checked ? 'done' : '';
    // create a 'li' element
    const node = document.createElement('li');
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);

    // set contents of the 'li' element
    node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="D:\Complete-2023-Web-Development-Bootcamp\Personal Projects\TO-DO APP\delete-note-svgrepo-com.svg"></use></svg>
    </button>
  `;
    list.append(node);
}