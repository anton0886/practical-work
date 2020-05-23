import React from 'react';
import { TableRow, TableCell, Checkbox } from '@material-ui/core/';
import changePerfomanceState from '../utilites/setDefaultData';

const ShowPerfomance = ({ done, handlechangePerfomanceState }) => {
    const handleChange = () => {
        handlechangePerfomanceState();
    };
    return (
        <Checkbox checked={done} onChange={handleChange} />
    )
};



const ShowTask = ({ item, index, setToDoList }) => {

    const handlechangePerfomanceState = () => {
        changePerfomanceState(item.id, setToDoList);
    }
    
    return (
        <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.text}</TableCell>
            <TableCell><ShowPerfomance done={item.done} handlechangePerfomanceState={handlechangePerfomanceState} />
            </TableCell>
            <TableCell>Delete</TableCell>
        </TableRow>
    );

};

export default ShowTask;