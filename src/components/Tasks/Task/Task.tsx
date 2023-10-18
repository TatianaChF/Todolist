import styles from "./Task.module.css"
import { TasksType } from "../Tasks"

export const TASK_DND_TYPE = "TASK_DND_TYPE";

export const Task = ({id, id_projects, title, column}: TasksType) => {
    
    return (
        <div className={styles.task_container}>
            {title}
        </div>
    )
}

