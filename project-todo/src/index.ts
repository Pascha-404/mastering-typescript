const form = document.querySelector('form') as HTMLFormElement;
const input = document.querySelector('#task-input') as HTMLInputElement;
const list = document.querySelector('#task-list') as HTMLUListElement;

interface Todo {
	text: string;
	completed: boolean;
}

const readTodos = (): Todo[] => {
	const savedTodos = localStorage.getItem('tsTodos');
	if (savedTodos !== null) {
		return JSON.parse(savedTodos);
	}
	return [];
};

const saveTodos = () => {
	localStorage.setItem('tsTodos', JSON.stringify(todos));
};

const createTodo = (todo: Todo): void => {
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

form.addEventListener('submit', (e: SubmitEvent) => {
	e.preventDefault();
	const newTodo: Todo = { text: input.value, completed: false };
	createTodo(newTodo);
	todos.push(newTodo);
	saveTodos();
	input.value = '';
});

const todos: Todo[] = readTodos();
todos.forEach(createTodo);
