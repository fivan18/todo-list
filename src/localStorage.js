import { projectFactory } from './todo'

const local = (function() {
  const storageName = 'projects';
  function saveArr(arr) {
    window.localStorage.setItem(storageName, JSON.stringify(arr));
  }

  function retrieveArr() {
    let arr = [];
    if (window.localStorage.getItem(storageName) !== null) {
      arr = JSON.parse(window.localStorage.getItem(storageName));
    }
    return arr;
  }

  return  {
    retrieveArr,
    saveArr
  };

})();

export default local;
