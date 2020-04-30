import './assets/css/style.css';
import './assets/css/sidebar.css';
import { projectFactory } from './todo' ;
import { dom } from './domManipulation';
import { storage } from './activeStorage';
import { layouts } from './layouts'

function  displayAlert(content,status){
  let alert = dom.getElement(document,'.alert');
  if(status=="succes"){
    alert.style.color = "green"
    dom.render(alert, content);
  } else {
    alert.style.color = "red"
    dom.render(alert, content);
  }
}

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

window.check = function check(index , indexParent, element){
  const projects = storage.getProjects();
  projects[indexParent].todos[index].checked = element.checked;
  storage.save();
}

// handler to display todos for a specific project
window.displayTodos = function displayTodos(index) {
  const projects = storage.getProjects();
  const createTodoForm = dom.getElement(document,'.create-todo-form');
  dom.render(createTodoForm, `<h3 class="name-of-the-project">${projects[index].name} todo's:</h3>`);
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
    displayAlert("Todo was created succesfully", "succes");
  }else{
    displayAlert(" Title and date cannot be blank", "error");
  }
}

window.deleteTodo = function deleteTodo(index, indexParent){
  const projects = storage.getProjects();
  projects[indexParent].todos.splice(index,1);
  storage.save();
  const allTodos = projects[indexParent].todos;
  renderItems(allTodos, layouts.todoItem, '.todos', indexParent);
  displayAlert("Todo was deleted succesfully", "succes");
}

window.showEditTodo = function showEditTodo(index, indexParent){
  let modal = dom.getElement(document, '.editTodoForm');
  modal.style.display = 'block';
  let form = dom.getElement(modal, "#edit-form")
  const projects = storage.getProjects();

  let {title, description, dueDate, priority} = projects[indexParent].todos[index];
  form.editTitle.value = title;
  form.editDescription.value = description;
  form.editDate.value = dueDate;
  form.editPriority.value = priority;

  let btnSave = dom.getElement(modal, '.save-todo');
  btnSave.addEventListener('click', () => {
    saveEditTodo(index, indexParent);
  });
}

function saveEditTodo(index, indexParent) {
  let form = dom.getElement(document, "#edit-form")
  const projects = storage.getProjects();
  let currentTodo = projects[indexParent].todos[index];
  const { editTitle: {value: title},
          editDescription: {value: description},
          editDate: {value: dueDate},
          editPriority: {value: priority} } = form;
  if (validateStr(title, 50, 5) &&
      validateStr(dueDate, 11, 0) &&
      validateDateFormat(dueDate) &&
      validateStr(description, 120, -1) &&
      [0, 1, 2].includes(parseInt(priority))
  ){
    currentTodo.title = title;
    currentTodo.description = description;
    currentTodo.dueDate = dueDate;
    currentTodo.priority = parseInt(priority);
    storage.save();
    closeEditTodo();
    renderItems(projects[indexParent].todos, layouts.todoItem, '.todos', index);
    displayAlert("Todo saved", "succes");

  }
}

window.closeEditTodo = function closeEditTodo(){
  let modal = dom.getElement(document, '.editTodoForm');
  modal.style.display = 'none';
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
    dom.append(dom.getElement(document, '.display-projects'),layouts.projectItem(project, index));
    displayAlert("Project created succesfully", "succes");
  } else {
    displayAlert(" Project name must contains more than 5 chars and less than 20 ", "red");
  }
}
dom.setEventHandler('.project-button', 'click', projectHandler);


// load all instance projects from local storage
storage.load();
const allProjects = storage.getProjects();
renderItems(allProjects, layouts.projectItem, '.display-projects');
