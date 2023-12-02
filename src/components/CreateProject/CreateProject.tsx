import { ChangeEvent, FormEvent, useState } from "react"
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

    const writeTask = (e: ChangeEvent<HTMLInputElement>) => {
        setProjects({id: Math.random(), title: e.target.value, status: "open"});
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input_add} value={project?.title} placeholder="Project name" type="text" 
            onChange={writeTask} />
            <button className={styles.button_add} onClick={() => addProjectsAction}>Create</button>
        </form>
    )
}

function uuidv4(): number {
    throw new Error("Function not implemented.")
}
