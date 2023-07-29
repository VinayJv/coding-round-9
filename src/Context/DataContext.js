import { createContext,useContext, useEffect, useState } from "react";
import { categories } from "../Database/Data";
import { videos } from "../Database/Data";
import { useNavigate } from "react-router-dom";

const DataContext = createContext(null);

export function ContextWrapper({children}){
    const navigate = useNavigate();
    const [category,setCategory] = useState(categories);
    const [videoData,setVideoData] = useState(videos);
    const [watchLater,setWatchLater] = useState([]);
    const [playlist,setPlaylist] = useState([]);

    return(<DataContext.Provider value={{category,setCategory,videoData, setVideoData, watchLater, setWatchLater, playlist,setPlaylist, navigate}}>{children}</DataContext.Provider>);
}

export const useDataContext = () => useContext(DataContext);