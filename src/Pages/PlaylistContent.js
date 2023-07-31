import { useParams } from "react-router";
import { useDataContext } from "../Context/DataContext";
import { Card } from "../Component/Card";

export function PlaylistContent() {
    const { playlistName } = useParams();
    const { playlist } = useDataContext();
    const clickedPlaylist = playlist.find((item)=>item.name === playlistName);
    return (
        <div className="main-page">
        <h1>{playlistName}</h1>
        {clickedPlaylist.videos.length === 0 && <h2>No Videos</h2>}
        <div className="category-container">{clickedPlaylist.videos.map((item,index)=><Card data={item} key={index} RemovePlaylist/>)}</div>
    </div>);
}