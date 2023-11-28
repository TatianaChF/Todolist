import { useEffect, useState } from "react"
import { Project } from "./Project/Project"
import styles from "./Projects.module.css"
import { Link } from "react-router-dom";
import { useStore } from "../../utils/StoreProvider";

export type Data = {
    id: number,
    title: string,
    status: string
}

export const Projects = () => {
    const store = useStore();

    useEffect(() => {
        store.projectsStore.fetchProjectsData();
    }, [])

    return (
        <>
            <h1 className={styles.header}>Projects</h1>
            <div>
                {
                    store.projectsStore.projectsList.map((value) => {
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
}
