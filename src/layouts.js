const layouts = (function() {

  function project(name, index) {
    return ` <li class="each-project" onClick="displayTodos(${index})"> ${name} </li> ` ;
  }


  return {
    project
  };

})();

export { layouts };
