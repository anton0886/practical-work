import React from "react";

const ClubInfo = ({ info1 }) => {
        return ( 
        <div >
        <img src={info1.logo} alt="LOGO"/>
        <p>FC = {info1.name}</p>
        <p>from {info1.city}</p>
        </div>);
        };
        export default ClubInfo;