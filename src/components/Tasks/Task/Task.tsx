import styles from "./Task.module.css"
import { TasksType } from "../Tasks"
import { Dispatch, SetStateAction, useState } from "react"
import { useDrag } from "react-dnd"

export const TASK_DND_TYPE = "TASK_DND_TYPE";

type TaskType = {
    id: string,
    id_projects?: number,
    title: string,
    column?: string,
    setTasksAction: Dispatch<TasksType[]>,
    removeTask: (id: string) => void
}

export const Task = ({id, id_projects, title, column, setTasksAction, removeTask}: TaskType) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    
    return (
        <div ref={drag} className={isDragging ? styles.task_container_drag : styles.task_container}>
            <p className={styles.title_task}>{title}</p>
            <svg onClick={() => removeTask(id)} className={styles.img_remove} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#3d3d3d" stroke="#3d3d3d">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"></path>
                    <path d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path>
                </g>
            </svg>
        </div>
    )
}
