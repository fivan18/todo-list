import './assets/css/style.css';
import { projectFactory } from './todo'

document.querySelector('.container').textContent = 'It works';


const project = projectFactory('todo list app');

project.addTodo('set repository');
console.log(project);

let strProject = JSON.stringify(project, undefined, 2);
console.log(strProject);

console.log(JSON.parse(strProject));
