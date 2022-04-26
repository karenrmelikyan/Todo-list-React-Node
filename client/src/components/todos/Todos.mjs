import { Table } from "react-bootstrap";

//import Todo from '../todo/Todo.mjs';

export default async function Todos(props) {

    // const res = await fetch(props.url, {method: 'GET'});
    // const data = await res.json();

    return (
      
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Day</th>
                <th>To do</th>
                </tr>
            </thead>
            <tbody>
                {/* <Todo day='monday' todo='To buy milk'/>
                <Todo day='monday' todo='To buy milk'/>
                <Todo day='monday' todo='To buy milk'/>
                <Todo day='monday' todo='To buy milk'/> */}

                
            </tbody>
            </Table>
        
    );
}

