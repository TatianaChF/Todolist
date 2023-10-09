import { Dispatch, SetStateAction } from "react"
import { TasksType } from "../Tasks/Tasks"
import styles from "./CreateTask.module.css"

export type TaskProps = {
    task: TasksType[],
    setTask: Dispatch<SetStateAction<TasksType[]>>
}

export const CreateTask = ({task, setTask}: TaskProps) => {
    return (
        <form>
            <input className={styles.input_add} placeholder="Task name" type="text" />
            <button>Create</button>
        </form>
    )
}