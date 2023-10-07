import { useDrag, useDrop } from "react-dnd"
import styles from "./Task.module.css"
import { Dispatch, SetStateAction, useRef } from "react"
import { COLUMN_NAMES } from "../../../constans"
import { DragSourceMonitor } from 'react-dnd'
import { TasksType } from "../Tasks"

type propsData = {
    name: string,
    currentColumnName: string
    setItems: Dispatch<SetStateAction<{ 
        id: number; 
        id_projects: number; 
        title: string; 
        column: string; 
    }[]>>,
    index: number,
    moveCardHandler: (dragIndex: number, hoverIndex: number) => void
}

type ItemType = {
    type: string,
    index: number, 
    name: string, 
    currentColumnName: string
}

export const TASK_DND_TYPE = "TASK_DND_TYPE";

export const Task = ({name, currentColumnName, setItems, index, moveCardHandler}: propsData) => {
    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: TASK_DND_TYPE,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    
    return (
        <div className={styles.task_container} ref={drag}>
            {name}
        </div>
    )
}