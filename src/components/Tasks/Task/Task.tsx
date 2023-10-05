import { useDrag } from "react-dnd";
import styles from "./Task.module.css";

type propsData = {
    name: string
}

export const Task = (props: propsData) => {
    
    return (
        <div className={styles.task_container}>
            {props.name}
        </div>
    )
}