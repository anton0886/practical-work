import React, { useEffect } from 'react';
import setDefaultData from './utilites/setDefaultData';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core/';
import ShowTask from './Components/showTask';

const App = () => {
    const listData = JSON.parse(localStorage.getItem('toDoList'));
    if (!listData || listData.length < 1) {
        setDefaultData();
    }
    const [toDoList, setToDoList] = React.useState(JSON.parse(localStorage.getItem('toDoList')));

    // useEffect(() => {
    //     setToDoList(localStorage.getItem('toDoList'))
    // }, []);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Text</TableCell>
                    <TableCell>Done</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    toDoList.map((item, index) => {
                        return <ShowTask item={item} index={index} key={item.id} setToDoList={setToDoList} />
                    })
                }
            </TableBody>
        </Table>
    )
};

export default App;