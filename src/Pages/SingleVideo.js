import { useParams } from "react-router";
import { useDataContext } from "../Context/DataContext";
import ReactPlayer from "react-player";
import { MdWatchLater } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { useState } from "react";
import { Notes } from "../Component/Notes";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export function SingleVideo() {
    const { videoTitle } = useParams();
    const { videoData, watchLater, setWatchLater, playlist, setPlaylist } = useDataContext();
    const [showNoteForm, setShowNoteForm] = useState(false);
    const [notesData, setNotesData] = useState([]);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [temp, setTemp] = useState("");
    const [input, setInput] = useState("");
    

    const findVideo = videoData.find((video) => video.title === videoTitle);

    const isPresentInWatchLater = watchLater.findIndex((video) => video.title === findVideo.title);

    const addToWatchLater = (event) => {
        event.stopPropagation();
        setWatchLater([...watchLater, findVideo]);
    };

    const removeFromWatchLater = (event) => {
        event.stopPropagation();
        const filteredList = watchLater.filter((video) => video.title !== findVideo.title);
        setWatchLater(filteredList);
    };

    const handleNote = (event) => {
        let notes = { text: event.target.elements[0].value };
        setNotesData([...notesData, notes]);
        event.preventDefault();
        event.target.reset();
        setShowNoteForm(false);
    }

    const addToPlaylist = (event) => {
        const playlistIndex = playlist.findIndex((item)=>item.name === event.target.id);
        const isAlreadyPresentInPlaylist = playlist[playlistIndex].videos.findIndex((item)=>item.title === findVideo.title);
        if(isAlreadyPresentInPlaylist === -1){
            setPlaylist([...playlist], (playlist[playlistIndex].videos = [...playlist[playlistIndex].videos, findVideo]));
        }
        setShowPlaylist(false);
    }

    const deleteNote = (noteText) => {
        const filteredNotes = notesData.filter((item, index) => item.text !== noteText);
        setNotesData(filteredNotes);
    };

    const updateNotes = (noteText, formValue) => {
        const clickedNoteIndex = notesData.findIndex((item)=>item.text === noteText);
        setNotesData([...notesData],notesData[clickedNoteIndex].text = formValue);
        setShowEditForm(false);
    }

    return (
        <div className="main-page">
            <ReactPlayer controls={true} width="75.8%" url={findVideo.src} />
            <div className="video-header-container">
                <div className="left">
                    <img src="https://source.unsplash.com/random/?person" className="round-images" alt=""></img>
                    <p>{findVideo.title}</p>
                </div>
                <div className="right">
                    {isPresentInWatchLater === -1 ? <MdOutlineWatchLater size={30} onClick={addToWatchLater} /> : <MdWatchLater size={30} onClick={removeFromWatchLater} />}
                    <MdPlaylistAdd size={35} onClick={()=>setShowPlaylist(!showPlaylist)}/>
                    <MdEditNote size={35} onClick={() => setShowNoteForm(!showNoteForm)} />
                    <div className="show-playlist-container" style={{display: showPlaylist ? "block" : "none"}}>
                        {playlist.length === 0 ? <div><p>No Playlist</p></div> : <p>Select a playlist:</p>}
                        {playlist.map((item,index)=><div key={index} onClick={addToPlaylist} id={item.name} className="option">{item.name}</div>)}
                    </div>
                    <form style={{ display: showNoteForm ? "block" : "none" }} className="note-form" onSubmit={handleNote}>
                        <input className="note-input" required></input>
                        <button type="submit" className="note-btn">Add New Note</button>
                    </form>
                </div>
            </div>
            <h2>My Notes</h2>
            <form style={{display: showEditForm ? "block" : "none"}} className="edit-form" onSubmit={(event)=>{
                event.preventDefault();
                event.target.reset();
                updateNotes(temp, input);
            }}>
                <input className="edit-input" defaultValue={temp} onChange={(event)=>setInput(event.target.value)}></input>
                <button className="edit-btn" type="submit">Save</button>
            </form>
            <div>
                {notesData.map((note, index) => <div className="note-container" key={index}>
                <div><p>{note.text}</p></div>
                    <div className="right">
                        <AiFillEdit size={25} onClick={()=>{setShowEditForm(true); setTemp(note.text)}}/>
                        <AiFillDelete size={25} onClick={() =>deleteNote(note.text)} />
                    </div>
                </div>)}
            </div>
        </div>);
}