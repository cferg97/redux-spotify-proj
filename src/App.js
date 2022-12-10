import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AlbumPage from "./components/album/AlbumPage";
import LikedSongs from "./components/LikedSongs";

import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import "./main_css.css";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MusicPlayer />
        <Sidebar />
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/liked/" element={<LikedSongs />} />
        <Route path="/search-results/" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
