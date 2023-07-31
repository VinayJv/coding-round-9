import { AiFillMinusCircle } from "react-icons/ai";
import { useDataContext } from "../Context/DataContext";

export function PlaylistCard({data}){
    const { playlist,setPlaylist, navigate } = useDataContext();

    const removeFromPlaylist = (event) => {
        const filteredList = playlist.filter(({name})=>name !== data.name);
        setPlaylist(filteredList);
        event.stopPropagation();
    };

    return(<div className="card" onClick={()=>navigate(`/playlist/${data.name}`)}><AiFillMinusCircle className="cta-btn" onClick={removeFromPlaylist}/><img src={data.thumbnail} alt="" className="playlist-image"></img><p className="bold">{data.name}<span> ({data.videos.length})</span></p><p>{data.description}</p></div>);
}