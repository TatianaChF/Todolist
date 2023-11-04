import { action, makeAutoObservable, makeObservable, observable, runInAction, toJS } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { TasksType } from '../components/Tasks/Tasks';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

class TasksStore {
    tasks: TasksType[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    getTasksAction = () =>  {
        fetch("./tasks.json").then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            runInAction(() => {
                this.tasks = data;
            })
            console.log(toJS(this.tasks));
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

export default new TasksStore();