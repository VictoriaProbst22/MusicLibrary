import React, { useState, useEffect} from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic";
import AddSong from "./Components/SearchBar";


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
  //function addNewSong(song){
//
  //  let tempSong = [song, ...songs];
  //  setSongs(tempSong);
  //  console.log(tempSong);
//
  //}

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
  
  }
}
  

  return (
    <div>
      <DisplayMusic songs={songs} parentSongs={songs}/>
      <AddSong addNewSongProp={createSong} />
    </div>
  );
}

export default App;
