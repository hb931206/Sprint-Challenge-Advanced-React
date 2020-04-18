import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import PlayerList from "./components/PlayerList";
import NavBar from "./components/NavBar";

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => setPlayers(res.data))

      .catch((err) => console.log(err));
  }, []);
  console.log(players);

  return (
    <div className="App">
      <NavBar />
      <PlayerList players={players} />
    </div>
  );
}

export default App;
