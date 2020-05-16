import React from 'react';
import './App.css';
import ClassWork2 from "./Components/ClassWork2";

const fc = {
info: {
    name : "Dinamo",
    city : "Kiyv",
    logo : "https://upload.wikimedia.org/wikipedia/ru/thumb/6/67/DynamoMoskva.png/200px-DynamoMoskva.png",
},
achivments: [
    "Чемпион (11): 1936 (в), 1937, 1940, 1945, 1949, 1954, 1955, 1957, 1959, 1963, 1976 (в)",
    "Серебряный призёр (12): 1936 (о), 1946, 1947, 1948, 1950, 1956, 1958, 1962, 1967, 1970, 1986, 1994",
    "Бронзовый призёр (9): 1952, 1960, 1973, 1975, 1990, 1992, 1993, 1997, 2008",
],
players : [
    {name : 'Something Xep',image: 'http://www.fcdynamo.kiev.ua/content/catalog/item2_188_sm1.jpg'},
    {name : 'Something Xep1',image: 'http://www.fcdynamo.kiev.ua/content/catalog/item2_783_sm1.jpg'},
    {name : 'Something Xep2',image: 'http://www.fcdynamo.kiev.ua/content/catalog/item2_1511_sm1.jpg'},
]
};
const App = () => {
    const [clubData, setClubData] = React.useState(fc);
    return (
        <ClassWork2 clubData = {clubData}/>

    );
};

export default App;