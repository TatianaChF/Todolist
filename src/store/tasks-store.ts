import { action, makeAutoObservable, toJS } from "mobx";
import { TasksType } from "../components/Tasks/Tasks";
import { tasks } from "../tasks";
import toast from "react-hot-toast";
import { Store } from "./store";

export class tasksStore {
    root: Store;
    tasksList: TasksType[] = [];

    constructor(root: Store) {
        this.root = root;
        makeAutoObservable(this);
    }

    fetchTasksData = () => {
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

    addTaskAction = (task: TasksType) => {
        let newTasksList = [task, ...this.tasksList];
        this.setTasksAction(newTasksList);
    }

    removeTaskAction = (id: string) => {
        const fTasks = this.tasksList.filter((task) => task.id !== id);
        this.setTasksAction(fTasks);
        console.log(toJS(this.tasksList));

        toast("Task deleted!", { icon: "🗑️" });
    }
}

