import { useState } from "react"
import styles from "./Tasks.module.css"
import { tasks } from "../../tasks"
import { COLUMN_NAMES } from "../../constans"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Column } from "./Column/Column"

type TasksType = {
    id: number,
    id_projects: number,
    title: string,
    status: string
}

export const Tasks = () => {
    const [items, setItems] = useState(tasks);
    const { QUEUE, DEV, DONE } = COLUMN_NAMES;

    return (
        <div className={styles.container}>
            <DndProvider backend={HTML5Backend}>
                <Column title={ QUEUE }></Column>
                <Column title={ DEV }></Column>
                <Column title={ DONE }></Column>
            </DndProvider>
        </div>
    )
}