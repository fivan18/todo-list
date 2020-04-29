import local from './localStorage';
import { projectFactory } from './todo';

const storage = (function() {
  let projects = [];

  const getProjects = () => projects;

  function addProject(project) {
    projects.push(project);
    local.saveArr(projects);
  }

  function load() {
    const localProjects = local.retrieveArr();
    projects = [];
    localProjects.forEach(localProject => {
      let completeProject = Object.assign(projectFactory(''), localProject);
      projects.push(completeProject);
    });
  }

  return {
    addProject,
    load,
    getProjects
  };

})();

export {
  storage
};
