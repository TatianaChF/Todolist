import styles from "./Task.module.css"
import { TasksType } from "../Tasks"
import remove_task from "./../../../assets/remove.svg"

export const TASK_DND_TYPE = "TASK_DND_TYPE";

export const Task = ({id, id_projects, title, column}: TasksType) => {
    
    return (
        <div className={styles.task_container}>
            <p className={styles.title_task}>{title}</p>
            <img src={remove_task} alt="remove_task" className={styles.img_remove} />
        </div>
    )
}

