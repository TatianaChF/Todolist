import { tasksStore } from "./tasks-store";

export class Store {
    tasksStore: tasksStore

    constructor() {
        this.tasksStore = new tasksStore(this)
    }
}