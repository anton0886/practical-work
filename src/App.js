import React from 'react';
import './App.css';
import ClassWork2 from "./Components/ClassWork2";

const App = ({ name }) => {
    return ( 
    <div>
        <h1> Hello World! </h1>
        <p> Your name { name } </p> 
        <ClassWork2 date = { new Date() }/>
    </div>
    );
};

export default App;