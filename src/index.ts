const btn = document.querySelector('#btn');
const input = document.querySelector('#todo-input') as HTMLInputElement;
const form = document.querySelector('form');
const list = document.querySelector('#todo-list');

interface Todo {
    text: string;
    completed: boolean;
};

const readTodos = (): Todo[] => {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null) return [];
    return JSON.parse(todosJSON); 
}

const saveTodos = (): void => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const createTodo = (todo: Todo): void => {
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
    list?.append(newLi);
    input.value = '';
}

const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo)
    todos.push(newTodo)
    saveTodos();
    
    
}

const todos: Todo[] = readTodos();
todos.forEach(createTodo);



form?.addEventListener('submit', handleSubmit);