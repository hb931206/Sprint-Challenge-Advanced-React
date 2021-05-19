import React from "react";
import Paper from '@material-ui/core/Paper'

const PlayerCard = ({name,country}) => {
  
  return (
    <Paper style={{margin:"5px", padding:"5px"}}>
      <h1>{name}</h1>
      <p>{country}</p>
    </Paper>
      
    
  );
};
export default PlayerCard;
