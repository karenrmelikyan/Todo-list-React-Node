import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Todo from '../todo/Todo.mjs';

export default function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5000/api/todo');
            const json = await response.json();

            setTodos(json);
        }

        fetchData(); 
    });

    return (
        <Table striped bordered hover size="sm">
           <thead>
                <tr>
                    <th>#</th>
                    <th>Day</th>
                    <th>To do</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { 
                    todos.map((todo) => <Todo key={todo._id} id={todo._id} day={todo.day} todo={todo.todo} />) 
                }
            </tbody>
        </Table>
    );
}

