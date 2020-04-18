import React from "react";
import PlayerCard from "./PlayerCard";
const PlayerList = (props) => {
  console.log("Soccer", props.players);
  return (
    <div>
      {props.players.map((player) => (
        <PlayerCard name={player.name} country={player.country} />
      ))}
    </div>
  );
};
export default PlayerList;
