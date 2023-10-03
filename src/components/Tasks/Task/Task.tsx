import styles from "./Task.module.css";

type propsData = {
    title: string,
    status: boolean
}

export const Task = (props: propsData) => {
    return (
        <div className={styles.task_container}>
            <form>
                <input type="checkbox" id="task" name="task" value={props.title} />
                <label htmlFor="task" className={styles.task_label}>{props.title}</label> 
            </form>
        </div>
    )
}