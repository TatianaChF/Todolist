import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"
import { TasksType } from "../Tasks/Tasks"
import styles from "./CreateTask.module.css"
import { v4 as uuidv4 } from 'uuid';

export type TasksProps = {
    items: TasksType[],
    setItems: Dispatch<SetStateAction<TasksType[]>>
}

export const CreateTask = ({items, setItems}: TasksProps) => {
    const [task, setTask] = useState<TasksType>({
        id: "",
        id_projects: 0,
        title: "",
        column: "queue"
    });

    const addTask = (task: TasksType) => {
        let newTasks = [task, ...items];

        setItems(newTasks);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!task) return;

        if (task.title.length < 3) return alert("The task length cannot be shorter than 3!");

        addTask(task);
        setTask({
            id: "",
            id_projects: 0,
            title: "",
            column: "queue"
        })
    }

    const writeTask = (e: ChangeEvent<HTMLInputElement>) => {
        setTask({id: uuidv4(), title: e.target.value, id_projects: 0, column: "queue"});
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input_add} value={task?.title} placeholder="Task name" type="text" 
            onChange={writeTask} />
            <button className={styles.button_add} onClick={() => addTask}>Create</button>
        </form>
    )
}