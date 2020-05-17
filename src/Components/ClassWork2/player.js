import React from "react";

const PlayerInfo = ({ playerInfo }) => {
    return (< >
        <tr >
            <td > < img src={playerInfo.image} alt={playerInfo.name} /></td >
            <td > {playerInfo.name} </td>
        </tr> </>
    );
};
export default PlayerInfo;