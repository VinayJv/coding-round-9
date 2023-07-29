import { MdWatchLater } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { useDataContext } from "../Context/DataContext";

export function Card({data}){
    const { watchLater,setWatchLater, navigate} = useDataContext();
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


    return(<div className="card" onClick={()=>navigate(`/video/${data.title}`)}>
    {isPresentInWatchLater === -1 ? <MdOutlineWatchLater className="cta-btn" onClick={addToWatchLater}/> : <MdWatchLater className="cta-btn" onClick={removeFromWatchLater}/>}
    <img src={data.thumbnail} alt=""></img>
    <p className="bold">{data.title}</p>
    <p className="bold">{data.category}</p>
    <p className="gray">{data.views} Views | {data.creator}</p>
    </div>)
}