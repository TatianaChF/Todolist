import { Dispatch, SetStateAction, useState } from "react"
import { TasksType } from "../Tasks/Tasks"
import styles from "./CreateTask.module.css"
import { v4 as uuidv4 } from 'uuid';
import { assert } from "console";

export type TasksProps = {
    items: TasksType[],
    setItems: any
}

export const CreateTask = ({items, setItems}: TasksProps) => {
    const [task, setTask] = useState<TasksType>({
        id: "",
        id_projects: 0,
        title: "",
        column: "queue"
    });

    const addTask = (task: any) => {
        let newTasks = [task, ...items];

        setItems(newTasks);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!task) return;

        addTask(task);
        setTask({
            id: "",
            id_projects: 0,
            title: "",
            column: "queue"
        })
    }

    const writeTask = (e: any) => {
        setTask({id: uuidv4(), title: e.target.value});
        
    }
    
    console.log(items);

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input_add} value={task?.title} placeholder="Task name" type="text" 
            onChange={writeTask} />
            <button className={styles.button_add} onClick={addTask}>Create</button>
        </form>
    )
}