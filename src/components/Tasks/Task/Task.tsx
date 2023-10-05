import { useDrag } from "react-dnd";
import styles from "./Task.module.css";
import { Dispatch, SetStateAction } from "react";

type propsData = {
    name: string,
    currentColumnName: string
    setItems: Dispatch<SetStateAction<{ 
        id: number; 
        id_projects: number; 
        title: string; 
        column: string; 
    }[]>>,
    index: number
}

export const Task = (props: propsData) => {
    
    return (
        <div className={styles.task_container}>
            {props.name}
        </div>
    )
}