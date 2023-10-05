import styles from "./Column.module.css"

type PropsColumn = {
    title: string
}

export const Column = (props: PropsColumn) => {
    return (
        <div className={styles.column}>
            <p>{props.title}</p>
        </div>
    )
}