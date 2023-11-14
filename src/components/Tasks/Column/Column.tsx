import { Dispatch, SetStateAction, useState } from "react";
import { TasksType } from "../Tasks";
import styles from "./Column.module.css";
import { Task } from "../Task/Task";
import toast from "react-hot-toast";
import { useDrop } from "react-dnd";
import { title } from "process";
import { observer } from "mobx-react-lite";
import { tasksStore } from "../../../store/tasks-store";

type ColumnPropsType = {
    status: string,
    items: TasksType[],
    setItems: Dispatch<TasksType[]>,
    queue: TasksType[],
    dev: TasksType[],
    done: TasksType[],
    id: string | undefined
}

export const Column = observer(({ status, items, setItems, queue, dev, done, id }: ColumnPropsType) => {
    const [tasks] = useState(() => new tasksStore());
    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: "task",
    //     drop: (item: TasksType) => addItemToSection(item.id),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver()
    //     })
    // }))

    const removeTask = (id: string) => {
        const fTasks = items.filter((task) => task.id !== id);
        setItems(fTasks);

        toast("Task deleted!", { icon: "🗑️" });
    }

    // const addItemToSection = (id: string) => {
    //     console.log("droped", id, status);

    //     setItems((prev) => {
    //         console.log("prev", prev);

    //         const modifiedTask = prev.map(task => {
    //             if(task.id === id) {
    //                 return {...task, column: status}
    //             }

    //             return task;
    //         })

    //         return modifiedTask;
    //     });
   //s ref={drop}
    //     toast("Task status changed", { icon: "🪄" });
    // }

    return (
        <div >
            <div className={status === "Queue" ? styles.header_column_queue : status === "Done" 
            ? styles.header_column_done : styles.header_column_dev}>
                <h2>
                    {status}
                </h2>
            </div>
            {
                items?.filter(tasks => tasks.id_projects?.toString() === id).filter(task => task.column === status)
                .map((value) => {
                    return (
                        <Task key={value.id} id={value.id} id_projects={value.id_projects} 
                        title={value.title} column={value.column} setItems={setItems} removeTask={tasks.removeTaskAction} />
                    )
                })
            }
        </div>
    )
})
