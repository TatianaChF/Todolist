import { useEffect, useState } from "react"
import { Task } from "./Task/Task"
import { useNavigate, useParams } from "react-router"
import styles from "./Tasks.module.css"

type TasksType = {
    id: number,
    id_projects: number,
    title: string,
    status: boolean
}

export const Tasks = () => {
    const [tasks, setTasks] = useState<TasksType[]>();
    const { id } = useParams();

    const fetchTasks = () => {
        fetch("tasks.json").then(response => {
            console.log(response);
            return response.json()
        }).then(data => {
            console.log(data);
            setTasks(data);
            console.log(tasks)
        }).catch((e: Error) => {
            console.log(e.message);
        })
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    return (
        <div>
            <h1 className={styles.header}>Tasks</h1>
            <div className={styles.container}>
                {
                    tasks?.filter((items) => items.id_projects.toString() === id).map((items) => {
                        return(
                            <Task key={items.id} title={items.title} status={items.status} />
                        )
                    })
                }
            </div>
        </div>
    )
}