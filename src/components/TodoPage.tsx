import React, {FC, useEffect, useState} from 'react';
import List from "./List";
import {ITodo} from "../types/types";
import TodoItem from "./Todoitem";
import axios from "axios";


const TodoPage: FC = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const [todos, setTodo] = useState<ITodo[]>([])

// eslint-disable-next-line react-hooks/rules-of-hooks
 useEffect(() => {
    fetchTodos()
}, [])


async function fetchTodos() {
    try {
        const response = await axios.get<ITodo[]>( 'https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodo(response.data)
    } catch (e) {
        alert(e)
    }
}


    return (
        <div>
            <List
                items={todos}
                renderItem={ (todo: ITodo ) => <TodoItem todo={todo} key={todo.id } /> } />
        </div>
    );
};

export default TodoPage;