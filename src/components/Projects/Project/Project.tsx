import { Data } from "../Projects"

export const Project = (props: Data) => {
    return (
        <div>
            {props.title}
            {props.status}
        </div>
    )
}