import { SubHeading } from "../SubHeading"
import { ToDoList } from "../ToDoList"
import { ToDoItem } from "../ToDoItem"

export function TodoGroup({ heading, items }) {
    return (
        <>
            <SubHeading>{heading}</SubHeading>
            <ToDoList>
                {items.map((t) =>
                    <ToDoItem key={t.id} item={t}/>
                )}
            </ToDoList>
        </>
    )
}  