import { useDrag, useDrop } from "react-dnd"
import styles from "./Task.module.css"
import { Dispatch, SetStateAction, useRef } from "react"
import { COLUMN_NAMES } from "../../../constans"
import { DragSourceMonitor } from 'react-dnd'
import { TasksType } from "../Tasks"

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

type ItemType = {
    type: string,
    index: number, 
    name: string, 
    currentColumnName: string
}

export const TASK_DND_TYPE = "TASK_DND_TYPE";

export const Task = ({name, currentColumnName, setItems, index, moveCardHandler}: propsData) => {
    const changeItemColumn = (currentItem: ItemType, columnName: string) => {
        setItems((prevState: TasksType[]
            ) => {
                if (Array.isArray(prevState)) {
                    return prevState.map((e: TasksType) => {
                        return {
                            ...e,
                            column: e.title === currentItem.name ? columnName : e.column
                        };
                    });
                }
                return [];
        });
    };

    const ref = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop(() => ({
        accept: TASK_DND_TYPE,
        hover(item: {
            index: number, 
            name: string, 
            currentColumnName: string
            }, monitor) {
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
    }))

    const [{ isDragging }, drag] = useDrag(() => ({
        type: TASK_DND_TYPE,
        item: { 
            type: TASK_DND_TYPE,
            index, name, currentColumnName,
         },
        end: (item, monitor) => {
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
    }));

    const opacity = isDragging ? 0.4 : 1;

    drag(drop(ref));
    
    return (
        <div className={styles.task_container} ref={ref} style={{opacity}}>
            {name}
        </div>
    )
}