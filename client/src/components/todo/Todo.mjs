import React from "react";
import { Button } from 'react-bootstrap';

export default function Todo({id, day, todo}) {

    async function remove(event, id) {
        const response = await fetch('http://localhost:5000/api/todo/', {
            method: 'DELETE',
            body: JSON.stringify ({
                _id: id,
            }),
    
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });   
    }


    return(
        <tr>
            <td>{id}</td>
            <td>{day}</td>
            <td>{todo}</td>
            <td>
                <Button>Edit</Button>
                <Button variant="danger" onClick={ (event) => remove(event, id) }>X</Button>
            </td>
        </tr>
    );
}