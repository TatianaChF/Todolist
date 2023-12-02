import { useState } from "react"
import { Data } from "../Projects/Projects"
import styles from "./CreateProjects.module.css"

export const CreateProject = () => {
    const [project, setProjects] = useState<Data>({
        id: 0,
        title: "",
        status: "open"
    })
    return (
        <form>
            <input className={styles.input_add} />
            <button className={styles.button_add}>Create</button>
        </form>
    )
}