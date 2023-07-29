import { useDataContext } from "../Context/DataContext";
import { Card } from "../Component/Card";

export function WatchLater(){
    const { watchLater } = useDataContext();
    return(<div className="main-page">
        <h1>Watch Later</h1>
        {watchLater.length === 0 ? <h2>No Videos</h2> : ""}
        <div className="category-container">
            {watchLater.map((video,index)=><Card data={video} key={index}/>)}
        </div>
    </div>);
}