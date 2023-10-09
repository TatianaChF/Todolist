import { useDrag, useDrop } from "react-dnd"
import styles from "./Task.module.css"
import { Dispatch, SetStateAction, useRef } from "react"
import { COLUMN_NAMES } from "../../../constans"
import { DragSourceMonitor } from 'react-dnd'
import { TasksType } from "../Tasks"
import { TaskProps } from "../../CreateTask/CreateTask"

type ItemType = {
    type: string,
    index: number, 
    name: string, 
    currentColumnName: string
}

export const TASK_DND_TYPE = "TASK_DND_TYPE";

export const Task = ({task, setTask}: TaskProps) => {
    
    return (
        <div className={styles.task_container}>
            
        </div>
    )
}