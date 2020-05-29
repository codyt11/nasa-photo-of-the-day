  
import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import axios from "axios";
import "./App.css";

function App() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Tj7UHhWFacBIrrhy6Zvpg88DBTTtljg9AIT6dPyQ")
    .then(response => {
      setNasa(response.data);
      console.log(response);
    })
    .catch(error => console.log("Something went wrong: ", error));
  }, []);

  return (
    <div className="App">
      <Post nasa = {nasa} />
    </div>
  );
}

export default App;
