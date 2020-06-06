import React from "react";
import addBoard from "../../utilites/addBoard";

const AddBoardBlock = ({ boards, setBoards }) => {

    const [inputValue, setInputValue] = React.useState('');


    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = (e) => {
        setInputValue("");
        addBoard(boards, setBoards, inputValue);
    };

    return (
        <>
            <input value={inputValue} type="text" onChange={e => handleChange(e)} />
            <button onClick={handleClick}>Add Block</button>
        </>
    )
};

export default AddBoardBlock;