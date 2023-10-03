import { useEffect, useState } from "react"
import { Task } from "./Task/Task"
import { useNavigate, useParams } from "react-router"
import styles from "./Tasks.module.css"

type TasksType = {
    id: number,
    id_projects: number,
    title: string,
    isDone: boolean
}

export const Tasks = () => {
    const [tasks, setTasks] = useState<TasksType[]>();
    const { id } = useParams();

    const fetchTasks = () => {
        fetch("tasks.json").then(response => {
            return response.json()
        }).then(data => {
            setTasks(data);
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
                <div>
                    <h4>Queue</h4>
                    {
                        tasks?.filter((items) => items.id_projects.toString() === id).filter((item) => item.isDone === false)
                        .map((items) => {
                            return(
                                <Task key={items.id} title={items.title} status={items.isDone} />
                            )
                        })
                    }
                </div>
                <div>
                    <h4>Development</h4>
                    {
                        tasks?.filter((items) => items.id_projects.toString() === id)
                        .map((items) => {
                            return(
                                <Task key={items.id} title={items.title} status={items.isDone} />
                            )
                        })
                    }
                </div>
                <div>
                    <h4>Done</h4>
                    {
                        tasks?.filter((items) => items.id_projects.toString() === id).filter((item) => item.isDone === true)
                        .map((items) => {
                            return(
                                <Task key={items.id} title={items.title} status={items.isDone} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

/* {
                        tasks?.filter((items) => items.id_projects.toString() === id)
                        .map((items) => {
                            return(
                                <Task key={items.id} title={items.title} status={items.isDone} />
                            )
                        })
                } */