import './assets/css/style.css';
import './assets/css/sidebar.css';
import { projectFactory } from './todo' ;
import { localStorage } from './local_storage' ;


const project = projectFactory('todo list app');


project.addTodo('set repository');
