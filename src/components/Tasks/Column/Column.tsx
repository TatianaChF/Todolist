import { Dispatch, SetStateAction } from "react";
import { TasksType } from "../Tasks";
import styles from "./Column.module.css";
import { Task } from "../Task/Task";
import toast from "react-hot-toast";
import { useDrop } from "react-dnd";

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
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item: TasksType) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const removeTask = (id: string) => {
        const fTasks = items.filter((task) => task.id !== id);
        setItems(fTasks);

        toast("Task deleted!", { icon: "🗑️" });
    }

    const addItemToSection = (id: string) => {
        console.log("droped", id);
    }

    return (
        <div ref={drop} className={styles.column}>
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