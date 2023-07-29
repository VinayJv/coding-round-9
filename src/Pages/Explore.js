import { useState } from "react";
import { Card } from "../Component/Card";
import { useDataContext } from "../Context/DataContext"

export function Explore(){
    const [input,setInput] = useState("");
    const { videoData } = useDataContext();

    const inputHandler = (event) => {
        setInput(event.target.value.toLowerCase());
    }

    const filteredData = () => {
        if(input.length === 0){
            return videoData;
        }
        else{
            return videoData.filter((video)=>video.title.toLowerCase().includes(input));
        }
    }

    return(<div className="main-page">
        <h1>Explore</h1>
        <input className="search-input" placeholder="Search video by title" onChange={inputHandler}></input>
        <div className="category-container">{filteredData().map((item,index)=><Card data={item} key={index}/>)}</div>
    </div>)
}