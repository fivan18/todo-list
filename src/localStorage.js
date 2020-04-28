const local = (function() {

  function saveArr(arr) {
    window.localStorage.setItem('projects', JSON.stringify(arr));
  }

  function retrieveArr() {
    let arr = [];
    if (window.localStorage.getItem('project') !== null) arr = JSON.parse(window.localStorage.getItem('library'));
    return arr;
  }

  return  { 
    retrieveArr, 
    saveArr
  };

})();

export default local;
