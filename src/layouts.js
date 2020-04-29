const layouts = (function() {

  function project(name, index) {
    return ` <li class="each-project" onClick="displayTodos(${index})"> ${name} </li> ` ;
  }

  function todoInput(){
    return `
          <form >
            <input type="text" class="todo-name" name="" value="" placeholder="Add new activity">
            <input type="date" class="todo-date" name="">
            <button class ="todo-button" type="button" >Save Todo</button>
          </form>
          `
  }


  return {
    project,
    todoInput
  };

})();

export { layouts };
