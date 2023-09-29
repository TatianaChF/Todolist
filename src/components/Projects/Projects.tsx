import { useState } from "react"

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    return (
        <div>
            <h1>Projects</h1>
            <div>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </div>
        </div>
    )
}