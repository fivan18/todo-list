const layouts = (function() {

  function project(name, index) {
    return ` <li class="each-project" onClick="displayTodos(${index})"> ${name} </li> ` ;
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

  function todoItem(item){
    return `
      <div class="todo-item">
        <div class="main-content-todo">
          <form action="#">
            <label>
              <input type="checkbox" class="" value="first_checkbox" ${item.checked ? checked : ''}>
              ${item.title}
            </label>
          </form>
          <div class="priority-todo">
            ${item.priority}
          </div>
        </div>
        <p>${item.description}</p>
        <div>
          <time datetime="${item.dueDate}">${item.dueDate}</time>
        </div>
        <div>
          <ul>
            ${getHTMLNotes(item.notes)}
          </ul>
        </div>
      </div>  
    `;
  }


  return {
    todoItem,
    project,
    todoInput
  };

})();

export { layouts };
