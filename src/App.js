import React from 'react';
import AddBoardBlock from './Components/addBoardBlock';

const App = () => {
    const [boards, setBoards] = React.useState([]);
    console.log(boards);

    return (
        <>
            <AddBoardBlock boards={boards} setBoards={setBoards} />
        </>
    )
};

export default App;