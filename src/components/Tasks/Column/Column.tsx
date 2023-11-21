import { Dispatch } from "react";
import { TasksType } from "../Tasks";
import styles from "./Column.module.css";
import { Task } from "../Task/Task";
import { useDrop } from "react-dnd";
import { observer } from "mobx-react-lite";
import toast from "react-hot-toast";

type ColumnPropsType = {
    status: string,
    items: TasksType[],
    setTasksAction: Dispatch<TasksType[]>,
    id: string | undefined,
    removeTask: (id: string) => void
}

export const Column = observer(({ status, items, setTasksAction, id, removeTask }: ColumnPropsType) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item: TasksType) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    // const addItemToSection = (id: string) => {

    //     setTasksAction((prev: TasksType[]) => {
    //         const modifiedTask = prev.map(task => {
    //             if(task.id === id) {
    //                 return {...task, column: status}
    //             }

    //             return task;
    //         })

    //         return modifiedTask;
    //     });

    //     toast("Task status changed", { icon: "🪄" });
    // }

        return (
            <div ref={drop}>
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
                                    title={value.title} column={value.column} setTasksAction={setTasksAction} removeTask={removeTask} />
                            )
                        })
                }
            </div>
        )
    })
function addItemToSection(id: string): any {
    throw new Error("Function not implemented.");
}

