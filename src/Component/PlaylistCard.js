import { AiFillMinusCircle } from "react-icons/ai";
import { useDataContext } from "../Context/DataContext";

export function PlaylistCard({data}){
    const { playlist,setPlaylist } = useDataContext();

    const removeFromPlaylist = () => {
        const filteredList = playlist.filter(({name})=>name !== data.name);
        setPlaylist(filteredList);
    };

    return(<div className="card"><AiFillMinusCircle className="cta-btn" onClick={removeFromPlaylist}/><img src={data.thumbnail} alt="" className="playlist-image"></img><p className="bold">{data.name}</p><p>{data.description}</p></div>);
}