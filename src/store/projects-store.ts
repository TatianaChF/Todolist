import { Data } from "../components/Projects/Projects";
import { Store } from "./store";
import { makeAutoObservable } from "mobx";

export class ProjectsStore {
    root: Store;
    projectsList: Data[] = [];

    constructor(root: Store) {
        this.root = root;
        makeAutoObservable(this);
    }

    fetchProjectsData = async () => {
        let response  = await fetch("./projects.json");
        let data = await response.json();
        this.setProjectsAction(data);
        throw new Error("error");
    }

    setProjectsAction = (data: Data[]) => {
        this.projectsList = data;
    }

    addProjectsAction = (project: Data) => {
        let newProjectsList = [project, ...this.projectsList];
        this.setProjectsAction(newProjectsList);
    }
}