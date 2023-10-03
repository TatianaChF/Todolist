type propsData = {
    title: string,
    status: string
}

export const Task = (props: propsData) => {
    return (
        <div>
            {props.title}
            {props.status}
        </div>
    )
}