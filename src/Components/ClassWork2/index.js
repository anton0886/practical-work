import React from "react";
import ClubInfo from "./info";
import Achivments from "./achivment";
import PlayerInfo from "./player";


const ClassWork2 = ({ clubData }) => {
    const { info, achivments, players } = clubData;
    return (
        <>
            <h2>Club Info</h2>
            <ClubInfo info1={info} />
            <h2>Achivments</h2>
            {
                achivments.map((item, index) => {
                    return <Achivments key={index} achivment={item} />
                })
            }
            <table>
                <tbody>
                {
                players.map((item,index)=> {
                    return <PlayerInfo playerInfo={item} key={index}/>
                })
                }
                </tbody>
            </table>
        </>
    );
};
export default ClassWork2;