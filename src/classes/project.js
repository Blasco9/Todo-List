class Project {
	constructor(name, description = '') {
		this.name = name;
		this.description = description;
		this.todos = [];
	}

	addTodo(todo) {
		this.todos.push(todo);
	}

	removeTodo(index) {
		return this.todos.splice(index, 1)[0];
	}
}

export default Project;
