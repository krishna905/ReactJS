import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch() {
    const [todo, setTodo] = useState([]);
    const [del, setDel] = useState();

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                console.log(res.data);
                setTodo((res.data));
            })
            .catch((err) => {
                console.log("Error occured");
            });
    }, []);

    useEffect(() => {
        setTodo(todo.filter(i => i.id != del))
    }, [del])


    return (
        <div>
            <table>
                <tr>
                    <th>UserId</th>
                    <th>id</th>
                    <th>title
                    </th>
                </tr>
                <>
                    {
                        todo
                            .map(tod => {
                                return (
                                    <>
                                        <tr onClick={() => { setDel(tod.id) }} >
                                            <td>{tod.userId}</td>
                                            <td >{tod.id}</td>
                                            <td>{tod.title}</td>
                                        </tr>

                                    </>
                                )

                            })
                    }
                </>
            </table>
        </div >
    )
}
export default DataFetch