import local from './localStorage';

const storage = (function() {
  let projects = [];

  function addProject(project) {
    projects.push(project);
    local.saveArr(projects);
  }

  return {
    addProject
  };

})();

export {
  storage
};