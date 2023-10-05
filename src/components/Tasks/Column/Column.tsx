import { COLUMN_NAMES } from "../../../constans"

type PropsColumn = {
    title: string
}

export const Column = (props: PropsColumn) => {
    return (
        <div>
            <p>{props.title}</p>
        </div>
    )
}