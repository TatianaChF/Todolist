import { useEffect, useState } from "react"

type Data = {
    id: string,
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
            <h1>Projects</h1>
            <div>
                {
                    data?.map((value) => {
                        return <p key={value.id}>{value.title}</p>
                    })
                }
            </div>
            <div>
                {
                    data?.map((value) => {
                        return <p key={value.id}>{value.status}</p>
                    })
                }
            </div>
        </div>
    )
}
