import { action, makeAutoObservable } from "mobx";
import { TasksType } from "../components/Tasks/Tasks";
import { tasks } from "../tasks";
import toast from "react-hot-toast";

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

    removeTaskAction = (id: string) => {
        const fTasks = this.tasksList.filter((task) => task.id !== id);
        this.setTasksAction(fTasks);

        toast("Task deleted!", { icon: "🗑️" });
    }
}

