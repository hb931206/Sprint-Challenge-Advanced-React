import React from "react";
import Grid from '@material-ui/core/Grid'
import {Container} from '@material-ui/core'

import PlayerCard from "./PlayerCard";
 


const PlayerList = ({players}) => {
  
  return (
    <Container>
    <Grid container>
      {players.map((player) => (
        <Grid item xs={12} md={6} lg={3}>
          <PlayerCard name={player.name} country={player.country} />
        </Grid>
        
      ))}
    </Grid>
    </Container>
  );
};
export default PlayerList;
