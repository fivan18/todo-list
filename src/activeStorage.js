import local from './localStorage';
import { projectFactory } from './factories';

const storage = (function storage() {
  let projects = [];

  const getProjects = () => projects;

  function addProject(project) {
    projects.push(project);
    local.saveArr(projects);
  }

  function createDefaultProject() {
    const defaultProject = 'Default Project';
    const project = projectFactory(defaultProject);
    addProject(project);
  }

  function load() {
    const localProjects = local.retrieveArr();
    if (localProjects.length === 0) {
      createDefaultProject();
    } else {
      projects = [];
      localProjects.forEach(localProject => {
        const completeProject = Object.assign(projectFactory(''), localProject);
        projects.push(completeProject);
      });
    }
  }

  function save() {
    local.saveArr(projects);
  }

  return {
    save,
    addProject,
    load,
    getProjects,
  };
}());

export default storage;
