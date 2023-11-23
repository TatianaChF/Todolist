import { makeAutoObservable, toJS } from "mobx";
import toast from "react-hot-toast";
import { Store } from "./store";
import { TasksType } from "./tasks-types";

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
        let newTasksList = [task, ...this.tasksList as TasksType[]];
        this.setTasksAction(newTasksList);
    }

    removeTaskAction = (id: string) => {
        const fTasks = (this.tasksList as TasksType[]).filter((task) => task.id !== id);
        this.setTasksAction(fTasks);

        toast("Task deleted!", { icon: "🗑️" });
    }

    addItemToSectionAction = (id: string, status: string) => {

        const modifiedTask = this.tasksList.map(task => {
            if(task.id === id) {
                return {...task, column: status}
            }

            return task;
        })

        this.setTasksAction(modifiedTask);

        toast("Task status changed", { icon: "🪄" });
    }
}