import { ChangeEvent, FormEvent, useState } from "react"
import { Project } from "../Projects/Projects"
import styles from "./CreateProjects.module.css"
import toast from "react-hot-toast"
import { v4 as uuidv4 } from 'uuid';

type CreateProjectProps = {
    addProjectsAction: (project: Project) => void;
}

export const CreateProject = ( {addProjectsAction}: CreateProjectProps ) => {
    const [project, setProjects] = useState<Project>({
        id: "",
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
            id: "",
            title: "",
            status: "open"
        });

        toast.success("Project created!");
    }

    const writeTask = (e: ChangeEvent<HTMLInputElement>) => {
        setProjects({id: uuidv4(), title: e.target.value, status: "open"});
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input_add} value={project?.title} placeholder="Project name" type="text" 
            onChange={writeTask} />
            <button className={styles.button_add} onClick={() => addProjectsAction}>Create</button>
        </form>
    )
}
