export default function Todo(props) {
    return(
        <tr>
        <td>1</td>
        <td>{props.day}</td>
        <td>{props.todo}</td>
        </tr>
    );
}