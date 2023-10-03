import { useEffect, useState } from "react";
import { Task } from "./Task/Task"
import { useNavigate, useParams } from "react-router";

type TasksType = {
    id: number,
    id_projects: number,
    title: string,
    status: string
}

export const Tasks = () => {
    const [tasks, setTasks] = useState<TasksType[]>();
    const { id } = useParams();
    const navigate = useNavigate(); 

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
            <h1>Tasks</h1>
            <div>
                {
                    tasks?.map((items) => {
                        return(
                            <Task key={items.id} title={items.title} status={items.status} />
                        )
                    })
                }
            </div>
        </div>
    )
}