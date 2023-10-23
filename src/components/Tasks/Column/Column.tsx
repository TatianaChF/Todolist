import styles from "./Column.module.css";

type ColumnPropsType = {
    status: string
}

export const Column = ({status}: ColumnPropsType) => {
    return (
        <div className={styles.column}>
            <h2>
                {status}
            </h2>
        </div>
    )
} 