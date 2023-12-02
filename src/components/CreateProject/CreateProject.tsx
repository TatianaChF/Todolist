import { FormEvent, useState } from "react"
import { Data } from "../Projects/Projects"
import styles from "./CreateProjects.module.css"
import toast from "react-hot-toast"

type CreateProjectProps = {
    addProjectsAction: (project: Data) => void;
}

export const CreateProject = ( {addProjectsAction}: CreateProjectProps ) => {
    const [project, setProjects] = useState<Data>({
        id: 0,
        title: "",
        status: "open"
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!project) return;

        if (project.title.length < 3) return toast.error("The task length cannot be shorter than 3!");
        else if (project.title.length > 100) return toast.error("The task length cannot be longer than 100!");

        addProjectsAction(project);
        setProjects({
            id: 0,
            title: "",
            status: "open"
        });

        toast.success("Project created!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input_add} />
            <button className={styles.button_add}>Create</button>
        </form>
    )
}