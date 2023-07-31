import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function NavBar(){
    const navigate = useNavigate();

    return(<div className="navbar-container">
        <ul className="nav-items">
            <li onClick={()=>navigate("/")}><AiFillHome className="icons" /><NavLink to="/">Home</NavLink></li>
            <li onClick={()=>navigate("/explore")}><MdOutlineExplore className="icons" /><NavLink to="/">Explore</NavLink></li>
            <li onClick={()=>navigate("/playlist")}><MdPlaylistAdd className="icons"/><NavLink to="/">Playlist</NavLink></li>
            <li onClick={()=>navigate("/watch-later")}><MdWatchLater className="icons"/><NavLink to="/">Watch Later</NavLink></li>
        </ul>
    </div>);
}