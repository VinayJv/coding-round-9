import { useParams } from "react-router";
import { useDataContext } from "../Context/DataContext";
import { Card } from "../Component/Card";

export function Listing(){
    const { categoryName } = useParams();
    const { videoData } = useDataContext();

    const filteredVideos = videoData.filter((video)=>video.category === categoryName);
    return(<div className="main-page">
        <h1>{categoryName}</h1>
        <div className="category-container">
            {filteredVideos.map((video,index)=><Card data={video} key={index}/>)}
        </div>
    </div>)
}