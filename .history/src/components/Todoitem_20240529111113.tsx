type TodoItemProps={
    id   : String,
    title: String,
    complete:Boolean
}
export function Todoitem({id, title, complete}: TodoItemProps){
    return (
        <li    className = "flex gap-1 items-center">
        <input type      = "text" id="id" type="checkbox"/>
        <label htmlFor={id}></label>
        </li>
    )
}