
const project = (name) => ({ name });

const todo = (title, description, dueDate, priority, notes, checkList) => ({
  title, description, dueDate, priority, notes, checkList,
});


export { project, todo };
