import { useEffect, useState } from "react"
import { Project } from "./Project/Project"
import styles from "./Projects.module.css"
import { Link } from "react-router-dom";

export type Data = {
    id: number,
    title: string,
    status: string
}

export const Projects = () => {
    const [data, setData] = useState<Data[]>();

    const fetchProjects = () => {
        fetch("./projects.json")
        .then(response => {
            return response.json();
        }).then(data => {
            setData(data);
        }).catch((e: Error) => {
            console.log(e.message)
        })
    }

    useEffect(() => {
        fetchProjects();
    }, [])

    return (
        <div>
            <h1 className={styles.header}>Projects</h1>
            <div>
                {
                    data?.map((value) => {
                        return (
                        <Link to={`/tasks/:${value.id}`}>
                            <Project key={value.id} id={value.id} title={value.title} status={value.status} />
                        </Link>)
                    })  
                }
            </div>
        </div>
    )
}
