import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Add() {

    const [day, setDay] = useState('');
    const [todo, setTodo] = useState('');

    function dayHandler(event) {
       setDay(event.target.value);
    }

    function todoHandler(event) {
       setTodo(event.target.value);
    }

    async function sendData(event) {
        event.preventDefault();
    
        await fetch('http://localhost:5000/api/todo/', {
            method: 'POST',
            body: JSON.stringify ({
                day: day,
                todo: todo,
            }),
    
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });   
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Day</Form.Label>
            <Form.Control type="text" name="day" onChange={dayHandler}/>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Todo</Form.Label>
            <Form.Control type="text" name="todo" onChange={todoHandler}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={sendData}>
                Add
            </Button>
        </Form>
    );
}


