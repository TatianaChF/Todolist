import styles from "./Column.module.css"

type PropsColumn = {
    children: JSX.Element[],
    title: string
}

export const Column = (props: PropsColumn) => {
    return (
        <div className={styles.column}>
            <p>{props.title}</p>
            {props.children}
        </div>
    )
}