
const DisplayMusic = (props) => {
    console.log(props.songs);

    return ( 
        <table>
            <thead>
            <tr> <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                <th>ReleaseDate</th>
            </tr>
            </thead>
            <tbody>
            {props.parentSongs.map((song)=> {
              return (
                <tr>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                </tr>
              );  
            })}
            </tbody>
    </table>
    );
}
 
export default DisplayMusic;

