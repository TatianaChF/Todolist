import { useDrop } from "react-dnd"
import styles from "./Column.module.css"
import { TASK_DND_TYPE } from "../Task/Task"
import { COLUMN_NAMES } from "../../../constans"
import { TasksType } from "../Tasks"
import { Dispatch, SetStateAction } from "react"

type PropsColumn = {
    children: JSX.Element[],
    title: string,
    items: TasksType[],
    setItems: Dispatch<SetStateAction<TasksType[]>>
}

export const Column = (props: PropsColumn) => {

    /* const [{ isOver }, drop] = useDrop(() => ({
        accept: TASK_DND_TYPE,
        drop: (item: any) => addItemToSection(item.name, item.column),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    const addItemToSection = (name: string, column: string) => {
        props.setItems((prev: TasksType[]) => {
            const mItem = prev.map(t => {
                if(t.title=== props.items.) {
                    return {...t, props.title: props.items.column}
                }
            })
        })
    } */

    return (
        <div className={styles.column}>
            <p>{props.title}</p>
            {props.children}
        </div>
    )
}