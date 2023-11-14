import { action, makeAutoObservable } from "mobx";
import { TasksType } from "../components/Tasks/Tasks";
import { tasks } from "../tasks";

export class tasksStore {
    tasksList: TasksType[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    fetchTasksData() {
        return fetch("./tasks.json")
        .then(response => {
            return response.json();
        }).then(data => {
            this.setTasksAction(data);
        }).catch((e: Error) => {
            console.log(e.message)
        })
    }

    setTasksAction = (data: TasksType[]) => {
        this.tasksList = data;  
    }
}

