import { TasksStore } from "./tasks-store";

export class Store {
    tasksStore: TasksStore

    constructor() {
        this.tasksStore = new TasksStore(this)
    }
}