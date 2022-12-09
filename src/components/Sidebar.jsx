import { useState } from "react";

import spotify_logo from "./spotify-logo.png";
import "./comp_css/sidebar.css"
import { Link } from "react-router-dom";


const Sidebar = () => {


  return (
    <>
    <div class="sidebar">
      <img class="logo" src={spotify_logo} alt="Spotify Logo" />
      <div class="navigation">
        <ul>
          <li>
            <Link to="/">
              <span class="fa fa-home"></span>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <a href="#">
              <span class="fa fa-search"></span>
              <input
                type="text"
                class="search-field"
                id="searchField"
                placeholder="Search artists/tracks"
              />
            </a>
          </li>

          <li>
            <a href="#">
              <span class="fa fas fa-book"></span>
              <span>Your Library</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="navigation">
        <ul>
          <li>
            <a href="#">
              <span class="fa fas fa-plus-square"></span>
              <span>Create Playlist</span>
            </a>
          </li>
          <li>
            
          </li>

          <li>
            <Link to="/liked">
              <span class="fa fas fa-heart"></span>
              <span>Liked Songs</span>
            </Link>
          </li>
        </ul>
      </div>

      <div class="policies">
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
