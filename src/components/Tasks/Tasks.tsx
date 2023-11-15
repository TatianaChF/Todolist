import { useEffect, useState } from "react"
import { Task } from "./Task/Task"
import { CreateTask } from "../CreateTask/CreateTask"
import { useParams } from "react-router"
import { Toaster } from "react-hot-toast"
import { Column } from "./Column/Column"
import styles from "./Tasks.module.css"
import { observer } from "mobx-react-lite"
import { toJS } from "mobx"
import { inject } from "mobx-react"
import { tasksStore } from "../../store/tasks-store"

export type TasksType = {
    id: string,
    id_projects?: number,
    title: string,
    column?: string
}

export const Tasks = observer(() => {
    const [tasks] = useState(() => new tasksStore());   
    const [queue, setQueue] = useState<TasksType[]>([]);
    const [dev, setDev] = useState<TasksType[]>([]);
    const [done, setDone] = useState<TasksType[]>([]);
    const { id } = useParams();
    const statuses = ["Queue", "Development", "Done"];

    useEffect(() => {
        tasks.fetchTasksData();
        console.log(toJS(tasks.tasksList));
    }, [])


    useEffect(() => {
        const fQueue = tasks.tasksList.filter(task => task.column === "queue");
        const fDev = tasks.tasksList.filter(task => task.column === "dev");
        const fDone = tasks.tasksList.filter(task => task.column === "done");

        setQueue(fQueue);
        setDev(fDev);
        setDone(fDone);
    }, [tasks.tasksList])

    return (
        <>
            <Toaster />
            <div>
                <CreateTask addTaskAction={tasks.addTaskAction} />
                <div className={styles.columns}>
                    {
                        statuses.map((status, index) => <Column key={index} status={status} items={tasks.tasksList}
                        setTasksAction={tasks.setTasksAction} queue={queue}
                            dev={dev} done={done} id={id} removeTask={tasks.removeTaskAction} />)
                    }
                </div>
            </div>
        </>
    )
})