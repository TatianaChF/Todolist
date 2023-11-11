import { makeAutoObservable } from "mobx";
import { TasksType } from "../components/Tasks/Tasks";
import { toJS } from "mobx";

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
            this.setTasks(data);
        }).catch((e: Error) => {
            console.log(e.message)
        })
    }

    setTasks(data: TasksType[]) {
        this.tasksList = data;
    }
}

