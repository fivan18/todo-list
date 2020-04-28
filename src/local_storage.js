var localStorage = (function() {

  function saveArr(arr) {
    window.localStorage.setItem('library', JSON.stringify(arr));
  }

  function retrieveArr() {
    let arr = [];
    if (window.localStorage.getItem('library') !== null) arr = JSON.parse(window.localStorage.getItem('library'));
    return arr;
  }

  return  { retrieveArr, saveArr }

})();

export { localStorage }
