import { SetStateAction, useState } from "react"
import styles from "./Tasks.module.css"
import { tasks } from "../../tasks"
import { COLUMN_NAMES } from "../../constans"
import { useDrop } from "react-dnd"
import { Column } from "./Column/Column"
import { TASK_DND_TYPE, Task } from "./Task/Task"
import { CreateTask } from "../CreateTask/CreateTask"

export type TasksType = {
    id: string,
    id_projects?: number,
    title: string,
    column?: string
}

export const Tasks = () => {
    const [items, setItems] = useState(tasks);
    const { QUEUE, DEV, DONE } = COLUMN_NAMES;

    return (
        <div>
            <CreateTask tasks={items} setTasks={setItems} />
            <Task tasks={items} setTasks={setItems} />
        </div>
    )
}