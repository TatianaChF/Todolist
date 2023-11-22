import { action, makeAutoObservable, observable, toJS } from "mobx";
import { TasksType } from "../components/Tasks/Tasks";
import { tasks } from "../tasks";
import toast from "react-hot-toast";
import { Store } from "./store";
import { ColumnEnum, PositionType } from "./tasks-types";
import { observer } from "mobx-react";

export class TasksStore {
    root: Store;
    tasksList: TasksType[] = [];
    draggedPosition: PositionType | null = null;
    positions: Record<ColumnEnum, string | null>;

    constructor(root: Store, positions: Record<ColumnEnum, string | null>) {
        this.root = root;
        makeAutoObservable(this);
        this.positions = positions
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

    onDrag = (position: PositionType) => {
        this.draggedPosition = position;
    }

    onDrop = (taskId: string, position: PositionType) => {
        const taskAtDrop = this.getItem(position);

        if (taskAtDrop || !this.draggedPosition) {
            return;
        }

        this.setItem(this.draggedPosition, null);
        this.setItem(position, taskId)
    }

    getItem = (position: PositionType) => {
        const [columnIndex] = position;
        return this.positions[columnIndex];
    }

    setItem = (position: PositionType, item: string | null) => {
        const [columnIndex] = position;
        this.positions[columnIndex] = item;
    }
}