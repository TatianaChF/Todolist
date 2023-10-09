import { Dispatch, SetStateAction, useState } from "react"
import { TasksType } from "../Tasks/Tasks"
import styles from "./CreateTask.module.css"

export type TasksProps = {
    tasks: TasksType[],
    setTasks: Dispatch<SetStateAction<TasksType[]>>
}

export const CreateTask = ({tasks, setTasks}: TasksProps) => {
    const [task, setTask] = useState();

    return (
        <form>
            <input className={styles.input_add} placeholder="Task name" type="text" />
            <button className={styles.button_add}>Create</button>
        </form>
    )
}