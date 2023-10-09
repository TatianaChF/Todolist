import { Dispatch, SetStateAction, useState } from "react"
import { TasksType } from "../Tasks/Tasks"
import styles from "./CreateTask.module.css"
import { v4 as uuidv4 } from 'uuid';

export type TasksProps = {
    tasks: TasksType[],
    setTasks: Dispatch<SetStateAction<{ 
        id: string; 
        id_projects: number; 
        title: string; 
        column: string; 
    }[]>>
}

export const CreateTask = ({tasks, setTasks}: TasksProps) => {
    const [task, setTask] = useState<TasksType>();

    return (
        <form>
            <input className={styles.input_add} placeholder="Task name" type="text" 
            onChange={(e) => setTask({...task, id: uuidv4(), title: e.target.value })} />
            <button className={styles.button_add}>Create</button>
        </form>
    )
}