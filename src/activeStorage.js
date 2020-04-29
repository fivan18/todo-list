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
    if (localProjects.length === 0){
      createDefaultProject();
      localProjects = local.retrieveArr();
    }
    projects = [];
    localProjects.forEach(localProject => {
      let completeProject = Object.assign(projectFactory(''), localProject);
      projects.push(completeProject);
    });
  }

  function save() {
    local.saveArr(projects);
  }

  function createDefaultProject(){
    let defaultProject = "Default Project";
    const project = projectFactory(defaultProject);
    addProject(project);
  }

  return {
    save,
    addProject,
    load,
    getProjects
  };

})();

export {
  storage
};
