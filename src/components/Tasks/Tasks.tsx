import { SetStateAction, useState } from "react"
import styles from "./Tasks.module.css"
import { tasks } from "../../tasks"
import { COLUMN_NAMES } from "../../constans"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Column } from "./Column/Column"
import { Task } from "./Task/Task"

export type TasksType = {
    id: number,
    id_projects: number,
    title: string,
    column: string
}

export const Tasks = () => {
    const [items, setItems] = useState(tasks);
    const { QUEUE, DEV, DONE } = COLUMN_NAMES;

    const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
        const dragItem = items[dragIndex];

        if (dragItem) {
            setItems((prevState: TasksType[]) => {
                if (Array.isArray(prevState)) {
                    const coppiedStateArray = [...prevState];
                    const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

                    coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

                    return coppiedStateArray;
                }
                
                return [];
            })
        }
    }

    const returnItemsForColumn = (columnName: string) => {
        return items.filter((item) => item.column === columnName).map((item, index) => (
            <Task key={item.id} 
                name={item.title} 
                currentColumnName={item.column} 
                setItems={setItems} 
                index={index} 
                moveCardHandler={moveCardHandler} />
        ))
    }

    return (
        <div className={styles.container}>
            <DndProvider backend={HTML5Backend}>
                <Column title={ QUEUE }>
                    {returnItemsForColumn(QUEUE)}
                </Column>
                <Column title={ DEV }>
                    {returnItemsForColumn(DEV)}
                </Column>
                <Column title={ DONE }>
                    {returnItemsForColumn(DONE)}
                </Column>
            </DndProvider>
        </div>
    )
}