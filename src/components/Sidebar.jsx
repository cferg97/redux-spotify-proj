import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPlaylistAction, setSearchQueryAction } from "../redux/actions";
import spotify_logo from "./spotify-logo.png";
import "./comp_css/sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [playList, showPlaylist] = useState(false);
  const listOfPL = useSelector((state) => state.playlists.list);

  const togglePlaylist = () => {
    showPlaylist((prevState) => !prevState);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setTimeout(() => {
        dispatch(setSearchQueryAction(e.target.value));
        navigate("/search-results/");
      }, 500);
    } else {
      return;
    }
  };

  const handlePlaylistEnter = (e) => {
    if (e.key === "Enter") {
      dispatch(createPlaylistAction(e.target.value));
    }
  };

  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <img className="logo" src={spotify_logo} alt="Spotify Logo" />
        </Link>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">
                <span className="fa fa-home"></span>
                <span>Home</span>
              </Link>
            </li>

            <li>
              <a href="#">
                <span className="fa fa-search"></span>
                <input
                  onKeyDown={(e) => {
                    handleEnter(e);
                  }}
                  type="text"
                  className="search-field"
                  id="searchField"
                  placeholder="Search artists/albums"
                />
              </a>
            </li>

            <li>
              <a href="#">
                <span className="fa fas fa-book"></span>
                <span>Your Library</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="fa fas fa-plus-square"></span>
                <span
                  onClick={() => {
                    togglePlaylist();
                  }}
                >
                  Create Playlist
                </span>
              </a>
              {playList && (
                <input
                  className="playlist-box"
                  type="text"
                  placeholder="Enter playlist name"
                  onKeyDown={(e) => {
                    handlePlaylistEnter(e);
                  }}
                />
              )}
            </li>
            <div className="playlist-list">
              {listOfPL.map((i) => (
                <li>
                  <a href="#">
                    <span style={{ marginRight: "5px" }}>
                      <i class="fa-solid fa-music"></i>
                    </span>
                    <span>{i}</span>
                  </a>
                </li>
              ))}
            </div>
            <li>
              <Link to="/liked">
                <span className="fa fas fa-heart"></span>
                <span>Liked Songs</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="policies">
          <ul>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
