import { Dispatch } from "react";
import styles from "./Column.module.css";
import { Task } from "../Task/Task";
import { useDrop } from "react-dnd";
import { observer } from "mobx-react-lite";
import toast from "react-hot-toast";
import { toJS } from "mobx";
import { TasksType } from "../../../store/tasks-types";

type ColumnPropsType = {
    status: string,
    items: TasksType[],
    setTasksAction: Dispatch<TasksType[]>,
    id: string | undefined,
    removeTask: (id: string) => void,
    addItemToSection: (id: string, status: string) => void
}

export const Column = observer(({ status, items, setTasksAction, id, removeTask, addItemToSection }: ColumnPropsType) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item: TasksType) => addItemToSection(item.id, status),
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

    //             console.log(task)

    //             return task;
    //         })

    //         console.log(modifiedTask);

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
                    (items as TasksType[]).filter(tasks => tasks.id_projects?.toString() === id).filter(task => task.column === status)
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

