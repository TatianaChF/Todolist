import { useEffect, useState } from "react"
import { Task } from "./Task/Task"
import { CreateTask } from "../CreateTask/CreateTask"
import { useParams } from "react-router"
import { Toaster } from "react-hot-toast"
import { Column } from "./Column/Column"
import styles from "./Tasks.module.css"
import { observer } from "mobx-react-lite"
import { toJS } from "mobx"
import { useStore } from "../../store/root-store-context"

export type TasksType = {
    id: string,
    id_projects?: number,
    title: string,
    column?: string
}

export const Tasks = observer(() => {
    const { tasksStore } = useStore();
    const [items, setItems] = useState<TasksType[]>([]);
    const [queue, setQueue] = useState<TasksType[]>([]);
    const [dev, setDev] = useState<TasksType[]>([]);
    const [done, setDone] = useState<TasksType[]>([]);
    const { id } = useParams();
    const statuses = ["Queue", "Development", "Done"];

    useEffect(() => {
        
    }, [])

    useEffect(() => {
        const fQueue = items.filter(task => task.column === "queue");
        const fDev = items.filter(task => task.column === "dev");
        const fDone = items.filter(task => task.column === "done");

        setQueue(fQueue);
        setDev(fDev);
        setDone(fDone);
    }, [items])

    return (
        <>
            <Toaster />
            <div>
                <CreateTask items={items} setItems={setItems} />
                <div className={styles.columns}>
                    {
                        statuses.map((status, index) => <Column key={index} status={status} items={items}
                            setItems={setItems} queue={queue}
                            dev={dev} done={done} id={id} />)
                    }
                </div>
            </div>
        </>
    )
})