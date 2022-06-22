import React, { useState, useEffect} from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic";
import AddSong from "./Components/AddSong";
import SearchBar from "./Components/SearchBar";



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


  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
  
  }
}

 function filterSongs(searchTerm){
  console.log("Songs: ", songs)
  let results = songs.filter((song)=>{
    if(searchTerm === song.title) {
      // song.title.includes(searchTerm) || song.artist.include(searchTerm)
    }
  })
  console.log("After filter: ", results)
  // setSongs(results)
 }
  

  return (
    <div>
      <SearchBar placeholder={filterSongs}/>
      <DisplayMusic songs={songs} parentSongs={songs}/>
      <AddSong addNewSongProp={createSong} />
    </div>
  );
}

export default App;
