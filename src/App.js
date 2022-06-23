import React, { useState, useEffect} from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic";
import AddSong from "./Components/AddSong";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";



function App() {


  const [songs, setSongs] = useState([]);

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

const filterSongs = (searchTerm) => {
  
  let results = songs.filter(
    function(song){
    if(song.title.includes(searchTerm)) {
      return true;
    }
    else if (song.artist.includes(searchTerm)) {
        return true;
    }
     else if(song.album.includes(searchTerm)) {
        return true;
    }
    else if(song.genre.includes(searchTerm)) {
      return true;
    }
    else if(song.release_date.includes(searchTerm)){
      return true;
    }
  });
  console.log(results);
  setSongs(results);
 

 }
    
 
  return (
    <div>
      <NavBar />
      <SearchBar searchSongProp={filterSongs}/>
      <AddSong addNewSongProp={createSong} />
      <DisplayMusic songs={songs} parentSongs={songs}/>
    </div>
  );
}

export default App;
