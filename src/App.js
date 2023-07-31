import './App.css';
import { Route,Routes } from "react-router-dom";
import { Landing } from './Pages/Landing';
import { NavBar } from './Component/NavBar';
import { Explore } from './Pages/Explore';
import { Playlist } from './Pages/Playlist';
import { WatchLater } from './Pages/WatchLater';
import { Listing } from './Pages/Listing';
import { SingleVideo } from './Pages/SingleVideo';
import { PlaylistContent } from './Pages/PlaylistContent';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/:categoryName' element={<Listing />}></Route>
        <Route path='/video/:videoTitle' element={<SingleVideo />}></Route>
        <Route path='/explore' element={<Explore />}></Route>
        <Route path='/playlist' element={<Playlist />}></Route>
        <Route path='/playlist/:playlistName' element={<PlaylistContent />}></Route>
        <Route path='/watch-later' element={<WatchLater/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
