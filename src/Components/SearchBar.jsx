import axios from "axios";
import React, { useState } from "react";


const AddSong = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [date, setDate] = useState('')



    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title : title,
            artist: artist,
            album: album,
            genre: genre,
            date: date
        };
        console.log(newEntry);
        props.addNewSongProp(newEntry);
    }


   


    return ( 
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' value={title} onChange={(event)=> setTitle(event.target.value)} />
            <lable>Artist</lable>
            <input type='text' value={artist} onChange={(event)=> setArtist(event.target.value)}/>
            <label>Album</label>
            <input type='text' value={album} onChange={(event)=> setAlbum(event.target.value)} />
            <label>Genre</label>
            <input type='text' value={genre} onChange={(event)=> setGenre(event.target.value)} />
            <label>Release Date</label>
            <input type='date' value={date} onChange={(event)=> setDate(parseFloat(event.target.value))} />
            <button type="submit" > Add </button>

        </form>
     );
}
 
export default AddSong;