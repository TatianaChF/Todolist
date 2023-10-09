import { Dispatch, SetStateAction } from "react";
import { TasksType } from "../Tasks/Tasks"

export type TaskProps = {
    task: TasksType[],
    setTask: Dispatch<SetStateAction<TasksType[]>>
}

export const CreateTask = ({task, setTask}: TaskProps) => {
    return (
        <div>

        </div>
    )
}