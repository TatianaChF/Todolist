import { Dispatch, SetStateAction } from "react";
import { TasksType } from "../Tasks";
import styles from "./Column.module.css";

type ColumnPropsType = {
    status: string,
    items: TasksType[],
    setItems: Dispatch<SetStateAction<TasksType[]>>,
    queue: TasksType[],
    dev: TasksType[],
    done: TasksType[]
}

export const Column = ({status}: ColumnPropsType) => {
    return (
        <div className={styles.column}>
            <h2>
                {status}
            </h2>
        </div>
    )
} 