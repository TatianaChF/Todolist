import styles from "./Task.module.css";

type propsData = {
    title: string,
    status: string
}

export const Task = (props: propsData) => {
    return (
        <div className={styles.task_container}>
            {props.title}
        </div>
    )
}