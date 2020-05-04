const todoFactory = (title, dueDate, description = '', priority = 0) => {
  const checked = false;
  const notes = [];
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checked,
  };
};

const projectFactory = (name) => {
  const todos = [];

  const addTodo = function addTodo(title, dueDate, description = '', priority = 0) {
    return this.todos.push(todoFactory(title, dueDate, description, priority)) - 1;
  };

  return {
    name,
    todos,
    addTodo,
  };
};

export { projectFactory, todoFactory };
