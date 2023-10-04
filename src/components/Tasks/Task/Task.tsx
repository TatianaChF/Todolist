import styles from "./Task.module.css";

type propsData = {
    title: string,
    status: string,
    dragOverHandler: (e: any) => void,
    dragLeaveHandler: (e: any) => void,
    dragStartHandler: (e: any) => void,
    dragEndHandler: (e: any) => void, 
    dropHandler: (e: any) => void
}

export const Task = (props: propsData) => {
    return (
        <div className={styles.task_container} 
            draggable={true} 
            onDragOver={(e: any) => props.dragOverHandler(e)}
            onDragLeave={(e: any) => props.dragLeaveHandler(e)}
            onDragStart={(e: any) => props.dragStartHandler(e)}
            onDragEnd={(e: any) => props.dragEndHandler(e)}
            onDrop={(e: any) => props.dropHandler(e)}>
            {props.title}
        </div>
    )
}