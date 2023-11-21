import { action, makeAutoObservable, toJS } from "mobx";
import { TasksType } from "../components/Tasks/Tasks";
import { tasks } from "../tasks";
import toast from "react-hot-toast";
import { Store } from "./store";

export class TasksStore {
    root: Store;
    tasksList: TasksType[] = [];

    constructor(root: Store) {
        this.root = root;
        makeAutoObservable(this);
    }

    fetchTasksData = async () => {
        let response = await fetch("./tasks.json");
        let data = await response.json();
        this.setTasksAction(data);
        throw new Error("error");
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