import { useDrag, useDrop } from "react-dnd"
import styles from "./Task.module.css"
import { Dispatch, SetStateAction, useRef } from "react"
import { COLUMN_NAMES } from "../../../constans"
import { DragSourceMonitor } from 'react-dnd'
import { TasksType } from "../Tasks"

export const TASK_DND_TYPE = "TASK_DND_TYPE";

export const Task = ({id, id_projects, title, column}: TasksType) => {
    
    return (
        <div className={styles.task_container}>
            {title}
        </div>
    )
}

