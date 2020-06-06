import React from "react";
import addTask from "../../utilites/addTask";

const Board = ({ board, boardsArray, setBoards }) => {
    const [newTask, setNewTask] = React.useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleClick = () => {
        setNewTask("");
        addTask(boardsArray, setBoards, board.id, newTask);
    }

    return (
        <div >
            <h2>{board.title}</h2>
            {
                board.tasks.length >= 1 && board.tasks.map((task) => {
                    return <p key={task.id}>{task.text}</p>
                })
            }
            <input value={newTask} type="text" onChange={handleChange} />
            <button onClick={handleClick}>Add new task</button>
        </div>
    )
}

export default Board;