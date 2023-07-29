import { useParams } from "react-router";
import { useDataContext } from "../Context/DataContext";
import ReactPlayer from "react-player";
import { MdWatchLater } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export function SingleVideo() {
    const { videoData, watchLater, setWatchLater } = useDataContext();
    const [showNoteForm, setShowNoteForm] = useState(false);
    const { videoTitle } = useParams();
    const [notesData, setNotesData] = useState([]);
    const [editForm, setEditForm] = useState(false);
    const [defaultNote, setDefaultNote] = useState("");
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

    const deleteNote = (noteIndex) => {
        const filteredNotes = notesData.filter((item, index) => index !== noteIndex);
        setNotesData(filteredNotes);
    };

    return (
        <div className="main-page">
            <ReactPlayer controls={true} width="75.8%" url={findVideo.src} />
            <div className="video-header-container">
                <div className="left">
                    <img src="https://source.unsplash.com/random/?person" className="round-images"></img>
                    <p>{findVideo.title}</p>
                </div>
                <div className="right">
                    {isPresentInWatchLater === -1 ? <MdOutlineWatchLater size={30} onClick={addToWatchLater} /> : <MdWatchLater size={30} onClick={removeFromWatchLater} />}
                    <MdPlaylistAdd size={35} />
                    <MdEditNote size={35} onClick={() => setShowNoteForm(!showNoteForm)} />
                    <form style={{ display: showNoteForm ? "block" : "none" }} className="note-form" onSubmit={handleNote}>
                        <input className="note-input" required></input>
                        <button type="submit" className="note-btn">Add New Note</button>
                    </form>
                </div>
            </div>
            <h2>My Notes</h2>
            <div>
                {notesData.map((note, index) => <div className="note-container" key={index}>
                    <div><p>{note.text}</p></div>
                    <div className="right">
                        <AiFillEdit size={25}/>
                        <AiFillDelete size={25} onClick={() => deleteNote(index)} />
                    </div>
                </div>)}
            </div>
        </div>);
}