import { Data } from "../Projects"
import styles from "./Project.module.css"

type PropsData = {
    id: number,
    title: string,
    status: string
}

export const Project = (props: PropsData) => {
    return (
        <div className={styles.project_container}>
            <div className={styles.project_title}>
                <h3>{props.title}</h3>
            </div>
            <div className={props.status === "open" ? styles.project_status_open 
            : props.status === "closed" ? styles.project_status_closed 
            : styles.project_status_progress}>
                {props.status}
            </div>
        </div>
    )
}