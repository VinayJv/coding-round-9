import { MdWatchLater } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { useDataContext } from "../Context/DataContext";
import { AiFillMinusCircle } from "react-icons/ai";
import { useParams } from "react-router";

export function Card({data, RemovePlaylist}){
    const { watchLater,setWatchLater, navigate, playlist, setPlaylist } = useDataContext();
    const { playlistName } = useParams();
    const isPresentInWatchLater = watchLater.findIndex((video)=>video.title === data.title);

    const addToWatchLater = (event) => {
        event.stopPropagation();
        setWatchLater([...watchLater, data]);
    };

    const removeFromWatchLater = (event) => {
        event.stopPropagation();
        const filteredList = watchLater.filter((video)=>video.title !== data.title);
        setWatchLater(filteredList);
    };

    const removeFromPlaylist = (event) => {
        event.stopPropagation();
        const playlistIndex = playlist.findIndex((item)=> item.name === playlistName);
        setPlaylist([...playlist], (playlist[playlistIndex].videos = playlist[playlistIndex].videos.filter((item)=>item.title !== data.title)));
    }


    return(<div className="card" onClick={()=>navigate(`/video/${data.title}`)}>
    {isPresentInWatchLater === -1 ? <MdOutlineWatchLater className="cta-btn" onClick={addToWatchLater}/> : <MdWatchLater className="cta-btn" onClick={removeFromWatchLater}/>}
    {RemovePlaylist && <AiFillMinusCircle className="cta-btn cta-add" onClick={removeFromPlaylist}/>}
    <img src={data.thumbnail} alt=""></img>
    <p className="bold">{data.title}</p>
    <p className="bold">{data.category}</p>
    <p className="gray">{data.views} Views | {data.creator}</p>
    </div>)
}