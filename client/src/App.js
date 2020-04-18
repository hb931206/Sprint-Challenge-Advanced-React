import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import PlayerList from "./components/PlayerList";

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
      <header className="App-header">
        <PlayerList players={players} />
      </header>
    </div>
  );
}

export default App;
