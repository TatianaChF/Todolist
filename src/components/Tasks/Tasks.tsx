import { useEffect, useState } from "react"
import { COLUMN_NAMES } from "../../constans"
import { Task } from "./Task/Task"
import { CreateTask } from "../CreateTask/CreateTask"
import { useParams } from "react-router"
import { Toaster } from "react-hot-toast"

export type TasksType = {
    id: string,
    id_projects?: number,
    title: string,
    column?: string
}

export const Tasks = () => {
    const [items, setItems] = useState<TasksType[]>([]);
    const [queue, setQueue] = useState<TasksType[]>([]);
    const [dev, setDev] = useState<TasksType[]>([]);
    const [done, setDone] = useState<TasksType[]>([]);
    const { id } = useParams();
    const statuses = ["queue", "dev", "done"];

    const fetchTasksData = () => {
        fetch("./tasks.json").then(response => {
            return response.json();
        }).then(data => {
            setItems(data);
        }).catch((e: Error) => {
            console.log(e.message);
        })
    }

    useEffect(() => {
        fetchTasksData();
    }, [])

    useEffect(() => {
        const fQueue = items.filter(task => task.column === "queue");
        const fDev = items.filter(task => task.column === "dev");
        const fDone = items.filter(task => task.column === "done");

        setQueue(fQueue);
        setDev(fDev);
        setDone(fDone);
    }, [items])

    console.log(items);

    return (
        <>
            <Toaster />
            <div>
            <CreateTask items={items} setItems={setItems} />
            {
                items?.filter(tasks => tasks.id_projects?.toString() === id).map((value) => {
                    return (
                        <Task key={value.id} id={value.id} id_projects={value.id_projects} 
                        title={value.title} column={value.column} />
                    )
                })
            }
            </div>
        </>
    )
}