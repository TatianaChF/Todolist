import { makeAutoObservable } from "mobx";
import { TasksType } from "../components/Tasks/Tasks";

export class tasksStore {
    tasksList: TasksType[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async fetchTasksData() {
        try {
            const res = fetch("./tasks.json").then(response => {
                return response.json();
            }).then(data => {
                this.setTasks(data);
                console.log(this.tasksList);
            })
        } catch(error) {
            console.log(error);
        }
    }

    setTasks(data: TasksType[]) {
        this.tasksList = data;
    }
}