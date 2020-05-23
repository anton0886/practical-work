const changePerfomanceState = (id,setToDoList) => {
    const toDoList = JSON.parse(localStorage.getItem('toDoList'));
    const itemToChange = toDoList.find((item) => item.id === id);
    itemToChange.done = !itemToChange.done;
    localStorage.setItem('toDoList',JSON.stringify(toDoList));
    setToDoList(toDoList);
 
    
}

export default changePerfomanceState;