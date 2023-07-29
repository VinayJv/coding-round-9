import { useDataContext } from "../Context/DataContext";
import { useState } from "react";
import { PlaylistCard } from "../Component/PlaylistCard";

export function Playlist(){
    const { playlist,setPlaylist } = useDataContext();
    const [showForm,setShowForm] = useState(false);
    console.log(playlist);

    const makeNewPlaylist = (event) => {
        let newPlaylist = {name: event.target.elements[0].value, description: event.target.elements[1].value, thumbnail: "https://source.unsplash.com/random/?music", videos: []}
        setPlaylist([...playlist, newPlaylist]);
        setShowForm(false);
        event.preventDefault();
        event.target.reset();
    };

    return(<div className="main-page">
        <h1>Playlist</h1>
        {playlist.length === 0 ? <h2>No Playlist</h2> : ""}
        <button onClick={()=>setShowForm(!showForm)}>+ create new playlist</button>
        <form style={{display: showForm ? "flex" : "none"}} className="form" onSubmit={makeNewPlaylist}>
            <label htmlFor="name">Name</label>
            <input id="name" required></input>
            <div className="margin"></div>
            <label htmlFor="description">Description</label>
            <textarea id="description"></textarea>
            <button type="submit">Create</button>
        </form>
        <div className="category-container">
            {playlist.map((item,index)=><PlaylistCard data={item} key={index}/>)}
        </div>
    </div>);
}