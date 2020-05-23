const setDefaultData = () => {
localStorage.setItem(
    'toDoList',
    JSON.stringify([
        {id: 0, text: 'Test with project0', done:false},
        {id: 1, text: 'Something you should to to!', done:true},
        {id: 2, text: 'Don"t forget about Cat', done:true},
        {id: 3, text: 'Test with project3', done:false},
        {id: 4, text: 'I like animals!', done:true},
    ])
    );
};
export default setDefaultData;