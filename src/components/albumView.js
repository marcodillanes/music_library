import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function AlbumView() {
}

//     const [ albumData, setAlbumData ] = useState({})
//     const [ songs, setSongs ] = useState ([])

//     const {} = useParams()

//     useEffect(() => {
//         fetch(`http://localhost:4000/song/${id}`)
//         .then(response => response.json())
//         .then(({ results }) => {
//             setAlbumData(results.shift())
//             setSongs(results)
//         })
//     })
//     return (
//         <div>
//             <Link to="/"><button>home</button></Link>
//             <h1>{albumData.collectionName}</h1>
//             <Link to={`/../artist/${albumData.aristId}`}>
//                 <h2>{albumData.artistName}</h2>
//             </Link>
//             <h2>{albumData.primaryGenreName}</h2>
//             <ul>
//                 {songs.map((song) => (
//                     <li>
//                         {song.trackName}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }