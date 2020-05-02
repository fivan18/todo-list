import { formatRelative } from 'date-fns';

const layouts = (function() {

  function projectItem(item, index, indexParent = -1) {
    return ` <li class="each-project" onClick="displayTodos(${index})"> ${item.name} </li> ` ;
  }

  function todoInput(index){
    return `
      <div class="todo-input">
        <br>
        <form class="new-todos-form" action="#">
          <label>Name: <br>
              <input type="text" class="todo-name" name="" placeholder="Add New Todo">
          </label>
          <label>Due Date: <br>
            <input type="date" class="todo-date" name="">
          </label>
          <button class ="todo-button" type="submit" onClick="todoHandler(${index})" name="button">Save Todo</button>
        </form>
      </div>
    `;
  }


  function todoSaveBtn(index, indexParent) {
    return `<button onclick="saveEditTodo(${index},${indexParent})" type="submit" name="button"> Save Todo</button>`;
  }

  function todoItem(item, index, indexParent){
    const priority = {
      0: 'Low',
      1: 'Medium',
      2: 'High'
    };
    const dateDistance = formatRelative(new Date(item.dueDate), new Date());

    return `
    <div class="todo-item" onmouseover="unhide(this)" onmouseout="hide(this)">
      <div class="main-content-todo">
        <form action="#">
          <label>
            <input type="checkbox" onclick="check(${index},${indexParent},this)" value="first_checkbox" ${item.checked ? 'checked' : ''}>
            ${item.title}
          </label>
        </form>
        <div class="priority-todo">
          ${priority[item.priority]}
        </div>
      </div>
      <div class="remainder-content" style="display: none;">
        <div>
          <time class="date-time" datetime="${item.dueDate}">${dateDistance}</time>
        </div>
        <p>${item.description}</p>
        <button class="delete" onClick="deleteTodo(${index},${indexParent})">
          delete
        </button>
        <button class="edit" onClick="showEditTodo(${index},${indexParent})">
          edit
        </button>
      </div>
    </div>
    `;
  }


  return {
    todoItem,
    projectItem,
    todoInput,
    todoSaveBtn
  };

})();

export { layouts };
