import { Project } from "../components/Projects/Projects";
import { Store } from "./store";
import { makeAutoObservable, toJS } from "mobx";

export class ProjectsStore {
    root: Store;
    projectsList: Project[] = [];

    constructor(root: Store) {
        this.root = root;
        makeAutoObservable(this);
    }

    fetchProjectsData = async () => {
        try {
            let response = await fetch("./projects.json");
            let projects = await response.json();
            this.setProjectsAction(projects);
        } catch(e) {
            console.log(e);
        }
    }

    setProjectsAction = (data: Project[]) => {
        this.projectsList = data;
    }

    addProjectsAction = (project: Project) => {
        let newProjectsList = [project, ...this.projectsList];
        console.log(project);
        this.setProjectsAction(newProjectsList);
    }
}