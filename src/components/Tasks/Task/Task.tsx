type propsData = {
    title: string,
    status: string
}

export const Task = (props: propsData) => {
    return (
        <div>
            <form>
                <input type="checkbox" id="task" name="task" value={props.title} />
                <label htmlFor="task">{props.title}</label> 
            </form>
        </div>
    )
}