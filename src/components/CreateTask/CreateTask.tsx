import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"
import { TasksType } from "../Tasks/Tasks"
import styles from "./CreateTask.module.css"
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast";
import { observer } from "mobx-react-lite";

export type TasksProps = {
    items: TasksType[],
    setItems: Dispatch<SetStateAction<TasksType[]>>
}

export const CreateTask = observer(({items, setItems}: TasksProps) => {     
    const [task, setTask] = useState<TasksType>({
        id: "",
        id_projects: 0,
        title: "",
        column: "Queue"
    });

    const addTask = (task: TasksType) => {
        let newTasks = [task, ...items];

        setItems(newTasks);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!task) return;

        if (task.title.length < 3) return toast.error("The task length cannot be shorter than 3!");
        else if (task.title.length > 100) return toast.error("The task length cannot be longer than 100!");

        addTask(task);
        setTask({
            id: "",
            id_projects: 0,
            title: "",
            column: "Queue"
        });

        toast.success("Task created!");
    }

    const writeTask = (e: ChangeEvent<HTMLInputElement>) => {
        setTask({id: uuidv4(), title: e.target.value, id_projects: 0, column: "Queue"});
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input_add} value={task?.title} placeholder="Task name" type="text" 
            onChange={writeTask} />
            <button className={styles.button_add} onClick={() => addTask}>Create</button>
        </form>
    )
})