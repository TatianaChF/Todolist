import { Data } from "ws";
import { Store } from "./store";
import { makeAutoObservable } from "mobx";

export class ProjectsStore {
    root: Store;
    projectsList: Data[] = [];

    constructor(root: Store) {
        this.root = root;
        makeAutoObservable(this);
    }
}