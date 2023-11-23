import { ProjectsStore } from "./projects-store";
import { TasksStore } from "./tasks-store";

export class Store {
    tasksStore: TasksStore;
    projectsStore: ProjectsStore

    constructor() {
        this.tasksStore = new TasksStore(this);
        this.projectsStore = new ProjectsStore(this);
    }
}