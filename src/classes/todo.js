class Todo {
	constructor(title, description = '', dueDate = '', priority = 'low') {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.done = false;
	}
}

export default Todo;
