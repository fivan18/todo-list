import './assets/css/style.css';
import './assets/css/sidebar.css';
import { projectFactory } from './todo' ;
import { dom } from './domManipulation';
import { storage } from './activeStorage';
import { layouts } from './layouts'

function validateStr(str, max, min = 0) {
  if (str.length < max && str.length > min) {
    return true;
  }
  return false;
}

function validateDateFormat(str){
  return /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(str);
}

function renderItems(items, callback, container, indexParent = -1){
  let layout = "";
  items.forEach((item, index) => {
    layout += callback(item, index, indexParent);
  });
  dom.render(dom.getElement(document, container), layout);
}

// handler to display todos for a specific project
window.displayTodos = function displayTodos(index) {
  const projects = storage.getProjects();
  const createTodoForm = dom.getElement(document,'.create-todo-form');
  dom.render(createTodoForm, projects[index].name);
  dom.append(createTodoForm, layouts.todoInput(index));
  const allTodos = projects[index].todos;
  renderItems(allTodos, layouts.todoItem, '.todos', index);
};

// handelr to create a todo
window.todoHandler = function todoHandler(index){
  const projects = storage.getProjects();
  const activityInput = dom.getElement(document,'.todo-name').value;
  const activityDate = dom.getElement(document,'.todo-date').value;
  if (
    validateStr(activityInput, 50, 5) &&
    validateStr(activityDate, 11, 0) &&
    validateDateFormat(activityDate)
  ){
    // save it as instance an local storage
    const todoIndex = projects[index].addTodo(activityInput, activityDate);
    storage.save();
    // show it in the user interface
    const newItem = projects[index].todos[todoIndex];
    let indexParent = index;
    dom.append(dom.getElement(document, '.todos'), layouts.todoItem(newItem, todoIndex, indexParent));
  }
}

window.deleteTodo = function deleteTodo(index, indexParent){
    const projects = storage.getProjects();
    projects[indexParent].todos.splice(index,1);
    storage.save();
    const allTodos = projects[indexParent].todos;
    renderItems(allTodos, layouts.todoItem, '.todos', indexParent);

}

// handler to hide and unhide todos
window.unhide = function unhide(element){
  let remainderContent = dom.getElement(element, '.remainder-content');
  remainderContent.style.display = 'block';
}

window.hide = function hide(element){
  let remainderContent = dom.getElement(element, '.remainder-content');
  remainderContent.style.display = 'none';
}

// handler to create a prject
function projectHandler(event){
  const input = dom.getElement(document, '.project-input').value;
  if (validateStr(input, 20, 5)) {
    const project = projectFactory(input);
    storage.addProject(project);
    let index =  storage.getProjects().length - 1;
    console.log(index);
    dom.append(dom.getElement(document, '.display-projects'),layouts.projectItem(project, index));
  } else {
    console.log('let user know that she/he needs to write a better name');
  }
}
dom.setEventHandler('.project-button', 'click', projectHandler);


// load all instance projects from local storage
storage.load();
const allProjects = storage.getProjects();
renderItems(allProjects, layouts.projectItem, '.display-projects');
