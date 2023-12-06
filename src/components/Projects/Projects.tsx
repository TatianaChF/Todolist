import { useEffect, useState } from "react"
import { Project } from "./Project/Project"
import styles from "./Projects.module.css"
import { Link } from "react-router-dom";
import { useStore } from "../../utils/StoreProvider";
import { CreateProject } from "../CreateProject/CreateProject";
import { observer } from "mobx-react-lite";

export type Project = {
    id: string,
    title: string,
    status: string
}

export const Projects = observer(() => {
    const store = useStore();

    useEffect(() => {
        store.projectsStore.fetchProjectsData();
    }, [store.projectsStore.fetchProjectsData])

    return (
        <>
            <h1 className={styles.header}>Projects</h1>
            <CreateProject addProjectsAction={store.projectsStore.addProjectsAction} />
            {
                store.projectsStore.projectsList?.map((value) => {
                    return (
                        value.title
                    )
                })
            }
            <div>
            {
                store.projectsStore.projectsList?.map((value) => {
                    return (
                        <Link className={styles.link} to={`${value.id}`} key={value.id}>
                            <Project key={value.id} id={value.id} title={value.title} status={value.status} />
                        </Link>
                    )
                })
            }
            </div>
        </>
    )
})
