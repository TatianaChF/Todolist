import { Dispatch, SetStateAction } from "react";
import { TasksType } from "../Tasks";
import styles from "./Column.module.css";
import { Task } from "../Task/Task";

type ColumnPropsType = {
    status: string,
    items: TasksType[],
    setItems: Dispatch<SetStateAction<TasksType[]>>,
    queue: TasksType[],
    dev: TasksType[],
    done: TasksType[],
    id: string | undefined
}

export const Column = ({ status, items, setItems, queue, dev, done, id }: ColumnPropsType) => {
    let count = queue.length;

    const removeTask = (id: string) => {
        console.log(id)
    }

    return (
        <div className={styles.column}>
            <h2>
                {status}
            </h2>
            {
                items?.filter(tasks => tasks.id_projects?.toString() === id).filter(task => task.column === status)
                .map((value) => {
                    return (
                        <Task key={value.id} id={value.id} id_projects={value.id_projects} 
                        title={value.title} column={value.column} setItems={setItems} removeTask={removeTask} />
                    )
                })
            }
        </div>
    )
} 