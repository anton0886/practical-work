import React from "react";
import ClubInfo from "./info";
import Achivments from "./achivment";
import PlayerInfo from "./player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const ClassWork2 = ({ clubData }) => {
    const { info, achivments, players } = clubData;
    return (
        <>
        <Router>
            <ul>
                <li><Link to='/'>Info</Link></li>
                <li><Link to='/achivments'>Achivments</Link></li>
                <li><Link to='/players'>Players</Link></li>
            </ul>
            <Switch>
            <Route path='/achivments'>
            <h2>Achivments</h2>
            {
                achivments.map((item, index) => {
                    return <Achivments key={index} achivment={item} />
                })
            }
            </Route>
            <Route path='/players'>
            <table>
                <tbody>
                {
                players.map((item,index) => {
                    return <PlayerInfo playerInfo={item} key={index}/>
                })
                }
                </tbody>
            </table>
            </Route>
            <Route path='/'>
            <h2>Club Info</h2>
            <ClubInfo info1={info} />
            </Route>
            </Switch>
            </Router>
        </>
    );
};
export default ClassWork2;