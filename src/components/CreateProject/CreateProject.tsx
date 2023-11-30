import { useState } from "react"
import { Data } from "../Projects/Projects"

export const CreateProject = () => {
    const [project, setProjects] = useState<Data>({
        id: 0,
        title: "",
        status: "open"
    })
    return (
        <form>
            <input />
            <button>Create</button>
        </form>
    )
}