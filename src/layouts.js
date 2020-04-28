const layouts = (function() {

  function project(name) {
    return ` <li class="each-project"> ${name} </li> ` ;
  }


  return {
    project
  };

})();

export { layouts };
