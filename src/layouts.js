const layouts = (function() {

  function projectItem(item, index, indexParent = -1) {
    return ` <li class="each-project" onClick="displayTodos(${index})"> ${item.name} </li> ` ;
  }

  function todoInput(index){
    return `
          <form >
            <input type="text" class="todo-name" name="" value="" placeholder="Add new activity">
            <input type="date" class="todo-date" name="">
            <button class ="todo-button" type="button" onClick="todoHandler(${index})" >Save Todo</button>
          </form>
          `
  }


  function getHTMLNotes(notes) {
    let htmlNotes = '';
    notes.forEach(note => {
      htmlNotes += `<li>${note}</li>`;
    });
    return htmlNotes;
  }

  function todoItem(item, index, indexParent){
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
          ${item.priority}
        </div>
      </div>
      <div class="remainder-content" style="display: none;">
        <p>${item.description}</p>
        <div>
          <time datetime="${item.dueDate}">${item.dueDate}</time>
        </div>
        <div>
          <ul>
            ${getHTMLNotes(item.notes)}
          </ul>
        </div>
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
    todoInput
  };

})();

export { layouts };
