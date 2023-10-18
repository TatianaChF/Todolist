import { Dispatch, SetStateAction, useEffect, useState } from "react"
import styles from "./Tasks.module.css"
import { tasks } from "../../tasks"
import { COLUMN_NAMES } from "../../constans"
import { useDrop } from "react-dnd"
import { Column } from "./Column/Column"
import { TASK_DND_TYPE, Task } from "./Task/Task"
import { CreateTask } from "../CreateTask/CreateTask"
import { useParams } from "react-router"

export type TasksType = {
    id: string,
    id_projects?: number,
    title: string,
    column?: string
}

export const Tasks = () => {
    const [items, setItems] = useState<TasksType[]>([]);
    const { id } = useParams();
    const { QUEUE, DEV, DONE } = COLUMN_NAMES;

    const fetchTasksData = () => {
        fetch("./tasks.json").then(response => {
            return response.json();
        }).then(data => {
            setItems(data);
        }).catch((e: Error) => {
            console.log(e.message);
        })
    }

    useEffect(() => {
        fetchTasksData();
    }, [])


    console.log(items);

    return (
        <div>
            <CreateTask items={items} setItems={setItems} />
            {
                items?.filter(tasks => tasks.id_projects?.toString() === id).map((value) => {
                    return (
                        <Task key={value.id} id={value.id} id_projects={value.id_projects} 
                        title={value.title} column={value.column} />
                    )
                })
            }
        </div>
    )
}