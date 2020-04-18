import React from "react";
const PlayerCard = (props) => {
  console.log(props);
  return (
    <div className="player-card" data-testid="card">
      <h1>{props.name}</h1>

      <p>{props.country}</p>
    </div>
  );
};
export default PlayerCard;
