
const projectFactory = (name) => {
  const todos = [];

  const addTodo = function addTodo(title, dueDate, description = '', priority = 0) {
    this.todos.push(todoFactory(title,description,priority));
  };

  return {
    name,
    todos,
    addTodo
  }
};

const todoFactory = (title, dueDate, description = '', priority = 0) => {
  const checked = false;
  const notes = [];
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checked
  }
};

export { projectFactory };
