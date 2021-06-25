import React from "react";
import Paper from '@material-ui/core/Paper'

const PlayerCard = ({name,country}) => {
  
  return (
    <Paper style={{margin:"5px", padding:"5px"}}>
      <h1 style={{whiteSpace:"nowrap", fontSize:"16.5px"}}>{name}</h1>
      <p style={{fontSize:"10px", fontWeight:"bold"}}>{country}</p>
    </Paper>
      
    
  );
};
export default PlayerCard;
