import { Dispatch, SetStateAction } from "react";
import { TasksType } from "../Tasks/Tasks"

type CreateTaskProps = {
    task: TasksType[],
    setTask: Dispatch<SetStateAction<TasksType[]>>
}

export const CreateTask = (props: CreateTaskProps) => {
    return (
        <div>

        </div>
    )
}