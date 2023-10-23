type ColumnPropsType = {
    status: string
}

export const Column = ({status}: ColumnPropsType) => {
    return (
        <div>
            {status}
        </div>
    )
} 