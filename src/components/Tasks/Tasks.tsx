import { SetStateAction, useState } from "react"
import styles from "./Tasks.module.css"
import { tasks } from "../../tasks"
import { COLUMN_NAMES } from "../../constans"
import { DndProvider, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Column } from "./Column/Column"
import { TASK_DND_TYPE, Task } from "./Task/Task"

export type TasksType = {
    id: number,
    id_projects: number,
    title: string,
    column: string
}

export const Tasks = () => {
    const [items, setItems] = useState(tasks);
    const { QUEUE, DEV, DONE } = COLUMN_NAMES;

    const [{ isOver }, drop] = useDrop(() => ({
        accept: TASK_DND_TYPE,
        drop: (item: any) => addItemToSection(item.name),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    const addItemToSection = (name: string) => {
        console.log("droped", name);
    }

    const returnItemsForColumn = (columnName: string) => {
        return items.filter((item) => item.column === columnName).map((item, index) => (
            <Task key={item.id} 
                name={item.title} 
                currentColumnName={item.column} 
                setItems={setItems} 
                index={index} />
        ))
    }

    return (
        <div ref={drop} className={styles.container}>
                <Column title={ QUEUE }>
                    {returnItemsForColumn(QUEUE)}
                </Column>
                <Column title={ DEV }>
                    {returnItemsForColumn(DEV)}
                </Column>
                <Column title={ DONE }>
                    {returnItemsForColumn(DONE)}
                </Column>
        </div>
    )
}