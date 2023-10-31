import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class TasksStore {
    tasksList = [{
        id: uuidv4(),
        id_projects: 0,
        title: "",
        column: "Queue"
    }];

    constructor() {
        makeAutoObservable(this);
    }

    addTask = (title: string) => {
        const task = {
            id: uuidv4(),
            id_projects: 0,
            title: title,
            column: "Queue"
        }

        this.tasksList.push(task);
    }

    removeTask = (id: string) => {
        this.tasksList = this.tasksList.filter((task) => task.id !== id);
    }
}