"use strict";
const form = document.querySelector('form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');
const readTodos = () => {
    const savedTodos = localStorage.getItem('tsTodos');
    if (savedTodos !== null) {
        return JSON.parse(savedTodos);
    }
    return [];
};
const saveTodos = () => {
    localStorage.setItem('tsTodos', JSON.stringify(todos));
};
const createTodo = (todo) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    if (checkbox.checked) {
        listItem.style.textDecoration = 'line-through';
    }
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        if (checkbox.checked) {
            listItem.style.textDecoration = 'line-through';
        }
        saveTodos();
    });
    listItem.append(todo.text);
    listItem.append(checkbox);
    list.append(listItem);
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = { text: input.value, completed: false };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = '';
});
const todos = readTodos();
todos.forEach(createTodo);
