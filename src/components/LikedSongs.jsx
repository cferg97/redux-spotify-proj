import "./comp_css/liked_songs.css"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { playSongArtistAction, playSongTrackAction } from "../redux/actions";
import { useEffect } from "react";
const LikedSongs = () => {
    const songs = useSelector((state) => state.likedSongs.list)
    console.log(songs)
    const dispatch = useDispatch()

    useEffect(() => {
      document.title = "Spotify | Liked Songs"
    }, [])

    return ( 
        <div className="main-container">
        <div className="topbar">
          <div className="prev-next-buttons">
            <button type="button" className="fa fas fa-chevron-left"></button>
            <button type="button" className="fa fas fa-chevron-right"></button>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <a href="s">Sign Up</a>
              </li>
            </ul>
            <a href="login-page.html">
              <button>Log In</button>
            </a>
          </div>
        </div>

        <div className="album-container">
          <div className="album-img-cont">
            <img
              id="album-artwork-top"
              alt=""
              src="https://preview.redd.it/rnqa7yhv4il71.jpg?width=640&crop=smart&auto=webp&s=819eb2bda1b35c7729065035a16e81824132e2f1"
            />
          </div>
          <div className="album-info-cont">
            <h1>Liked Songs</h1>
            <h4>Your best of tracks</h4>
          </div>
        </div>

        <div className="other-container">
          <div className="list-container">
            <div className="list-top-bar">
              <div id="green-circle">
                <div id="green-circle-inner">
                  <i className="fa-solid fa-pause"></i>
                </div>
              </div>
              <button type="button" id="dot-btn">
                <i className="fa-solid fa-circle"></i>
                <i className="fa-solid fa-circle"></i>
                <i className="fa-solid fa-circle"></i>
              </button>
            </div>
          </div>

          <div id="tags">
            <h3>#</h3>
            <h3>Title</h3>
          </div>
          <hr />
          <div className="album-list">
            <table className="table">
              <tbody id="track-list">
                {songs.map((s, index) => (
                                      <tr onClick={() =>
                                        {
                                          dispatch(playSongArtistAction(s.artist.name))
                                          dispatch(playSongTrackAction(s.title))
                                        }
                                      }>
                                      <td class="audio"><span class="hidden"><i class="bi bi-soundwave"></i></span>{index+1}</td>
                                      <td style = {{width: "60vw"}}><span id="artist-sub">{s}</span></td>
                                      </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     );
}
 
export default LikedSongs;