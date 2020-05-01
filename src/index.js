import './assets/css/style.css';
import './assets/css/sidebar.css';
import { projectFactory } from './todo' ;
import { dom } from './domManipulation';
import { storage } from './activeStorage';
import { layouts } from './layouts';
import pubsub from './pubsub';

/* ************************* Helper methods ************************* */
function  displayAlert(content,status, place){
  let alert = dom.getElement(document, place);
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

/* ************************* Todo's handlers ************************* */
// create a todo
window.todoHandler = function todoHandler(indexParent){
  const projects = storage.getProjects();
  const activityInput = dom.getElement(document,'.todo-name').value;
  const activityDate = dom.getElement(document,'.todo-date').value;
  if (
    validateStr(activityInput, 50, 5) &&
    validateStr(activityDate, 11, 0) &&
    validateDateFormat(activityDate)
  ){
    // modify the data model
    const index = projects[indexParent].addTodo(activityInput, activityDate);
    // publish a todo list has been modified
    pubsub.publish( "modify/todoOrProjectList", {
      append: true,
      item: projects[indexParent].todos[index],
      index,
      indexParent,
      alert: ["Todo was created succesfully", "succes",".global-alert"],
      selectorContainer: '.todos',
      layout: layouts.todoItem
    });
  }else{
    displayAlert(" Title and date cannot be blank", "error",".global-alert");
  }
}

// check a todo
window.check = function check(index , indexParent, element){
  const projects = storage.getProjects();
  projects[indexParent].todos[index].checked = element.checked;
  storage.save();
}

// delete a todo
window.deleteTodo = function deleteTodo(index, indexParent){
  // modify the data model
  const projects = storage.getProjects();
  projects[indexParent].todos.splice(index,1);
  // publish a todo list has been modified
  pubsub.publish( "modify/todoOrProjectList", {
    append: false,
    items: projects[indexParent].todos,
    indexParent,
    alert: ["Todo was deleted succesfully", "red", ".global-alert"],
    selectorContainer: '.todos',
    layout: layouts.todoItem
  });
}

// edit a todo
window.closeEditTodo = function closeEditTodo(){
  let modal = dom.getElement(document, '.editTodoForm');
  modal.style.display = 'none';
}

window.saveEditTodo = function saveEditTodo(index, indexParent) {
  console.log(index,indexParent);
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
    // modify the data model
    currentTodo.title = title;
    currentTodo.description = description;
    currentTodo.dueDate = dueDate;
    currentTodo.priority = parseInt(priority);
    closeEditTodo();
    // publish a todo list has been modified
    pubsub.publish( "modify/todoOrProjectList", {
      append: false,
      items: projects[indexParent].todos,
      indexParent,
      alert: ["Todo saved succesfully", "succes",".global-alert"],
      selectorContainer: '.todos',
      layout: layouts.todoItem
    });
  }else {
    displayAlert("Invalid input on form","red",".error-todo-form")
  }
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

  dom.render(dom.getElement(document, '.save-todo'), layouts.todoSaveBtn(index, indexParent));
}

// hide and unhide todos when the mouse is over
window.unhide = function unhide(element){
  let remainderContent = dom.getElement(element, '.remainder-content');
  remainderContent.style.display = 'block';
}

window.hide = function hide(element){
  let remainderContent = dom.getElement(element, '.remainder-content');
  remainderContent.style.display = 'none';
}

/* ************************* Project's handlers ************************* */
// handler to create a prject
function projectHandler(){
  const input = dom.getElement(document, '.project-input').value;
  if (validateStr(input, 20, 5)) {
    // modify data model
    const project = projectFactory(input);
    storage.addProject(project);
    // publish the project list has been modified
    pubsub.publish( "modify/todoOrProjectList", {
      append: true,
      item: project,
      index: storage.getProjects().length - 1,
      alert: ["Project created succesfully", "succes",".global-alert"],
      selectorContainer: '.display-projects',
      layout: layouts.projectItem
    });
  } else {
    displayAlert(" Project name must contains more than 5 chars and less than 20 ", "red", ".global-alert");
  }
}
dom.setEventHandler('.project-button', 'click', projectHandler);

// handler to display todos for a specific project
window.displayTodos = function displayTodos(index) {
  const projects = storage.getProjects();
  const createTodoForm = dom.getElement(document,'.create-todo-form');
  dom.render(createTodoForm, `<h3 class="name-of-the-project">${projects[index].name} todo's:</h3>`);
  dom.append(createTodoForm, layouts.todoInput(index));
  renderItems(projects[index].todos, layouts.todoItem, '.todos', index);
};

/* ************************* Subscribe methods ************************* */
// subscribers
const saver = function saver(topic, data) {
  storage.save();
};
const todosDisplyer = function todosDisplayer(topic, data){
  if(data.append) {
    dom.append(dom.getElement(document, data.selectorContainer), data.layout(data.item, data.index, data.indexParent));
  } else {
    renderItems(data.items, data.layout, data.selectorContainer, data.indexParent);
  }  
};
const alertDisplayer = function alertDisplayer(topic, data) {
  displayAlert(...data.alert);
};

// subscribe
pubsub.subscribe('modify/todoOrProjectList', saver);
pubsub.subscribe('modify/todoOrProjectList', todosDisplyer);
pubsub.subscribe('modify/todoOrProjectList', alertDisplayer); 

/* ************************* Initialize App ************************* */
storage.load();
const allProjects = storage.getProjects();
renderItems(allProjects, layouts.projectItem, '.display-projects');
