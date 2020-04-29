import './assets/css/style.css';
import './assets/css/sidebar.css';
import { projectFactory } from './todo' ;
import { dom } from './domManipulation';
import { storage } from './activeStorage';
import { layouts } from './layouts'

// handler to display todos for a specific project
window.displayTodos = function displayTodos(index) {
  const projects = storage.getProjects();
  const todos = dom.getElement(document,'.todos');
  const createTodoForm = dom.getElement(document,'.create-todo-form');
  dom.render(createTodoForm, projects[index].name);
  dom.append(createTodoForm, layouts.todoInput());
  console.log(projects[index]);
};


// handler to create a prject
function validateStr(str, max, min = 0) {
  if (str.length < max && str.length > min) {
    return true;
  }
  return false;
}

function projectHandler(event){
  const input = dom.getElement(document, '.project-input').value;
  console.log(input);
  if (validateStr(input, 20, 5)) {
    const project = projectFactory(input);
    storage.addProject(project);
    console.log(project);
  } else {
    console.log('let user know that she/he needs to write a better name');
  }
}
dom.setEventHandler('.project-button', 'click', projectHandler);


function todoHandler(event){
  const activityInput = dom.getElement(document,'.todo-name').value;
  const activityDate = dom.getElement(document,'.todo-date').value;
  if (validateStr(activityInput, 50, 5)){
    console.log(activityInput);
  }
}
dom.setEventHandler('.todo-button', 'click', todoHandler);



// load all instance projects from local storage
storage.load();
const allProjects = storage.getProjects();
let layoutProjects = "";
allProjects.forEach( (project, index) => {
  layoutProjects += layouts.project(project.name, index);
});
dom.render(dom.getElement(document, '.diplay-projects'), layoutProjects );
