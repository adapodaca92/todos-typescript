"use strict";
const btn = document.querySelector('#btn');
const input = document.querySelector('#todo-input');
const form = document.querySelector('form');
const list = document.querySelector('#todo-list');
;
const readTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
};
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
const createTodo = (todo) => {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLi);
    input.value = '';
};
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
};
const todos = readTodos();
todos.forEach(createTodo);
form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleSubmit);
