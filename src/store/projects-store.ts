import { Data } from "../components/Projects/Projects";
import { Store } from "./store";
import { makeAutoObservable, toJS } from "mobx";

export class ProjectsStore {
    root: Store;
    projectsList: Data[] = [];

    constructor(root: Store) {
        this.root = root;
        makeAutoObservable(this);
    }

    fetchProjectsData = () => {
        fetch("./projects.json")
        .then(response => {
            return response.json();
        }).then(data => {
            this.setProjectsAction(data);
        }).catch((e: Error) => {
            console.log(e.message)
        })
    }

    setProjectsAction = (data: Data[]) => {
        this.projectsList = data;
    }
}