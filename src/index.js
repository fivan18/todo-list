import './assets/css/style.css';
import './assets/css/sidebar.css';
import { projectFactory } from './todo' ;
import { localStorage } from './local_storage' ;
import { dom } from './domManipulation'

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
    console.log(project);
  } else {
    console.log('let user know that she/he needs to write a better name');
  }
}

dom.setEventHandler('.project-button', 'click', projectHandler);



// ;
// project.addTodo('set repository');
