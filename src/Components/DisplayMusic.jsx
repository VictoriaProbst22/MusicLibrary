/** THIS PAGE IS ONLY USED WHEN YOU CAN CONFIRM YOUR GETTING DATA BACK
 * THEN YOU WILL CREATE AN HTML TABLE AND MAP OVER THE SONGS PASSED DOWN THROUGH PROPS
 * AND GENERATE THE TABLE DATA ROWS
 */




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
            {props.parentSongs.map((song, index)=> {
              return (
                <tr>
                    <td>{index + 1}</td>
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

