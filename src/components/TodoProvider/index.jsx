import TodoContext from "./TodoContext";
import { useState } from "react";

export function TodoProvider({ children }) {

    const [todos, setTodos] = useState([]);

    const addToDo = (formData) => {
        const description = formData.get('description');
        setTodos((prevState) => {
            const newToDo = {
                id: prevState.length + 1,
                description: description,
                completed: false,
                createdAt: new Date().toISOString()
            }
            return [...prevState, newToDo]
        })
    }

    const toggleToDoCompleted = (todo) => {
        setTodos((prevState) => {
            return prevState.map((t) => {
                if (t.id == todo.id) {
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }
                return t
            })
        })
    }

    const deleteTodo = (todo) => {
        setTodos((prevState) => {
            return prevState.filter((t) => t.id != todo.id)
        })
    }

    return (
        <TodoContext.Provider value={{ todos, addToDo, toggleToDoCompleted, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

