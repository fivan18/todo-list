
const projectFactory = (name) => { 
  const todos = [];

  const addTodo = function addTodo(title, description = '', priority = 0) {
    this.todos.push(todoFactory(title,description,priority));
  };

  return {
    name,
    todos,
    addTodo
  }
};

const todoFactory = (title, description = '', priority = 0) => {
  const dueDate = '2020-04-28';
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
