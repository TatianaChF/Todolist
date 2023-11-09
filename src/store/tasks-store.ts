import { action, makeAutoObservable, makeObservable, observable, runInAction, toJS } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { TasksType } from '../components/Tasks/Tasks';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

class tasksStore {
    tasks: TasksType[] = [];    

    constructor() {
        makeAutoObservable(this);
    }

    setTasks = (tasks: TasksType[]) => {
        this.tasks = tasks;
    }   

    getTasksAction = async () => {
        await fetch("./tasks.json").then(response => {
            return response.json();
        }).then(data => {
            this.setTasks(data);
        }).catch((e: Error) => {
            console.log(e.message);
        })
    }

    addTaskAction = (task: TasksType) => {
        console.log(task);
    }

    removeTask = (id: string) => {
        console.log(id);
    }
}

export default tasksStore;