import { useDrag, useDrop } from "react-dnd"
import styles from "./Task.module.css"
import { Dispatch, SetStateAction, useRef } from "react"
import { COLUMN_NAMES } from "../../../constans"
import { DragSourceMonitor } from 'react-dnd'

type propsData = {
    name: string,
    currentColumnName: string
    setItems: Dispatch<SetStateAction<{ 
        id: number; 
        id_projects: number; 
        title: string; 
        column: string; 
    }[]>>,
    index: number,
    moveCardHandler: (dragIndex: number, hoverIndex: number) => void
}

export const Task = ({name, currentColumnName, setItems, index, moveCardHandler}: propsData) => {
    const changeItemColumn = (currentItem: any, columnName: string) => {
        setItems((prevState: any) => {
            return prevState.map((e: any) => {
                return {
                    ...e,
                    column: e.name === currentItem.name ? columnName : e.column
                };
            });
        });
    };

    const ref = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop({
        accept: "task",
        hover(item: propsData, monitor) {
            if (!ref.current) {
                return;
            }
            
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCardHandler(dragIndex, hoverIndex); 
            item.index = hoverIndex;
        }
    })

    const [{ isDragging }, drag] = useDrag({
        item: { index, name, currentColumnName, type: "task" },
        end: (item: propsData, monitor) => {
            const dropResult = monitor.getDropResult();

            if (dropResult) {
                const name  = dropResult;
                const { QUEUE, DEV, DONE } = COLUMN_NAMES;
                switch (name) {
                    case QUEUE:
                        changeItemColumn(item, QUEUE);
                        break;
                    case DEV:
                        changeItemColumn(item, DEV);
                        break;
                    case DONE:
                        changeItemColumn(item, DONE);
                        break;
                    default:
                        break;
                }
            }
        },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const opacity = isDragging ? 0.4 : 1;

    drag(drop(ref));
    
    return (
        <div className={styles.task_container}>
            {name}
        </div>
    )
}