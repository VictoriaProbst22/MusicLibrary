import React, { useState, useEffect} from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic";
import AddSong from "./Components/AddSong";


function App() {


  const [songs,setSongs] = useState([]);

  useEffect(()=> {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
    
    console.log(response.data);
  }

  

  return (
    <div>
      <DisplayMusic songs={songs} parentSongs={songs}/>
      <AddSong />
    </div>
  );
}

export default App;
