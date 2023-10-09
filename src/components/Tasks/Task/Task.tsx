import { useDrag, useDrop } from "react-dnd"
import styles from "./Task.module.css"
import { Dispatch, SetStateAction, useRef } from "react"
import { COLUMN_NAMES } from "../../../constans"
import { DragSourceMonitor } from 'react-dnd'
import { TasksType } from "../Tasks"
import { TasksProps } from "../../CreateTask/CreateTask"

type ItemType = {
    type: string,
    index: number, 
    name: string, 
    currentColumnName: string
}

export const TASK_DND_TYPE = "TASK_DND_TYPE";

export const Task = ({tasks, setTasks}: TasksProps) => {
    
    return (
        <div className={styles.task_container}>
            
        </div>
    )
}