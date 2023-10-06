import { useDrop } from "react-dnd"
import styles from "./Column.module.css"
import { TASK_DND_TYPE } from "../Task/Task"
import { COLUMN_NAMES } from "../../../constans"

type PropsColumn = {
    children: JSX.Element[],
    title: string
}

export const Column = (props: PropsColumn) => {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: TASK_DND_TYPE,
        drop: () => ({name: props.title}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
        canDrop: (item) => {
            const { QUEUE, DEV, DONE } = COLUMN_NAMES;
            const currentColumnName = item;
            return (
                currentColumnName === props.title || 
                (currentColumnName === QUEUE && props.title === DEV) ||
                (currentColumnName === DEV && 
                    (props.title === QUEUE || props.title === DONE)) ||
                (currentColumnName === DONE && props.title === DEV)
            );
        }
    }));

    const getBackgroundColor = () => {
        if (isOver) {
            if (canDrop) {
                return "rgb(188,251,255)";
            } else if (!canDrop) {
                return "rgb(255,188,188)";
            } else {
                return "";
            }
        }
    }

    return (
        <div ref={drop} className={styles.column} style={{background: getBackgroundColor()}}>
            <p>{props.title}</p>
            {props.children}
        </div>
    )
}