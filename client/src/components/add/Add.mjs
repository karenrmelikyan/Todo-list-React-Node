import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Add() {

    const [day, setDay] = useState('');
    const [todo, setTodo] = useState('');
    const [isSent, setIsSent] = useState(false);

    function dayHandler(event) {
        setDay(event.target.value);
    }

    function todoHandler(event) {
        setTodo(event.target.value);
    }

    async function sendData(event) {
        event.preventDefault();

        if(day.length > 0 && todo.length > 0) {
            const response = await fetch('http://localhost:5000/api/todo/', {
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

            response.status === 201 ? setIsSent(true) : setIsSent(false);
        }
    }

    useEffect(() => {

        setTimeout(() => {
            setIsSent(false);
            setDay('');
            setTodo('');
        }, 2000);

    }, [isSent]);

    return (
        <>
            { !isSent ?
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
                : <h1>SENT!!!</h1>
            }
        </>
    );
}
