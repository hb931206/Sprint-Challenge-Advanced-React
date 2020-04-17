import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [soccer, setSoccer] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => setSoccer(res.data))

      .catch((err) => console.log(err));
  }, []);
  console.log(soccer);

  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React</p>
      </header>
    </div>
  );
}

export default App;
