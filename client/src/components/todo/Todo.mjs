import React from "react";

export default function Todo({id, day, message}) {
    return(
        <tr>
            <td>{id}</td>
            <td>{day}</td>
            <td>{message}</td>
        </tr>
    );
}