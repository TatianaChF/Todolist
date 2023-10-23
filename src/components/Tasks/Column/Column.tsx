type ColumnPropsType = {
    status: string
}

export const Column = ({status}: ColumnPropsType) => {
    return (
        <div>
            <h2>
                {status}
            </h2>
        </div>
    )
} 