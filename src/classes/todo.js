class Todo {
	constructor(id, title, description = '', dueDate = '', priority = 'low') {
		this.id = id;
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.done = false;
	}

	toggleCheck() {
		this.done = !this.done;
	}
}

export default Todo;
