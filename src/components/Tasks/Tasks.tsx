import { SetStateAction, useState } from "react"
import styles from "./Tasks.module.css"
import { tasks } from "../../tasks"
import { COLUMN_NAMES } from "../../constans"
import { useDrop } from "react-dnd"
import { Column } from "./Column/Column"
import { TASK_DND_TYPE, Task } from "./Task/Task"
import { CreateTask } from "../CreateTask/CreateTask"

export type TasksType = {
    id: number,
    id_projects: number,
    title: string,
    column: string
}

export const Tasks = () => {
    const [items, setItems] = useState(tasks);
    const { QUEUE, DEV, DONE } = COLUMN_NAMES;

    const returnItemsForColumn = (columnName: string) => {
        return items.filter((item) => item.column === columnName).map((item, index) => (
            <Task key={item.id} 
                name={item.title} 
                column={item.column} 
                setItems={setItems} 
                index={index} />
        ))
    }

    return (
        <div>
            <CreateTask task={items} setTask={setItems} />
            <div className={styles.container}>
                <Column title={ QUEUE } items={items} setItems={setItems}>
                    {returnItemsForColumn(QUEUE)}
                </Column>
                <Column title={ DEV } items={items} setItems={setItems}>
                    {returnItemsForColumn(DEV)}
                </Column>
                <Column title={ DONE } items={items} setItems={setItems}>
                    {returnItemsForColumn(DONE)}
                </Column>
            </div>
        </div>
    )
}