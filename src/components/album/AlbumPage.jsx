import "../comp_css/album.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  likeSongAction,
  playSongArtistAction,
  playSongTrackAction,
  playSongArtAction,
  setMusicDurationAction,
  setMusicPlay,
} from "../../redux/actions";

const AlbumPage = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const [data, setData] = useState([]);
  const [show, setToShow] = useState(false);
  const favesList = useSelector((state) => state.likedSongs.list);

  const checkLike = (i) => {
    if (favesList.includes(i)) {
      return true;
    } else {
      return false;
    }
  };

  const getAlbumData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + id.id
      );
      let fetchedData = await response.json();
      if (response.ok) {
        setData(fetchedData);
        setToShow(true);
      } else {
        console.log("Error fetching");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAlbumData();
    document.title = "Spotify | Album";
  }, []);

 

  const defineDuration = (t) => {
    return Math.floor(t / 60) + ":" + ("0" + Math.floor(t % 60)).slice(-2);
  };

  return (
    <>
      {show && (
        <div className="main-container">
          <div className="topbar">
            <div className="prev-next-buttons">
              <button type="button" className="fa fas fa-chevron-left"></button>
              <button
                type="button"
                className="fa fas fa-chevron-right"
              ></button>
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
              <img id="album-artwork-top" alt="" src={data.cover_big} />
            </div>
            <div className="album-info-cont">
              <h3>Album</h3>
              <h1 id="album-name">{data.title}</h1>
              <h6>
                <span id="artist-name">By {data.artist.name} </span>
                <i className="fa-sharp fa-solid fa-circle"></i>
                <span id="album-year"> Released {data.release_date}</span>{" "}
                <i className="fa-sharp fa-solid fa-circle"></i>
                <span id="song-num"> {data.nb_tracks} songs</span>{" "}
                <span id="album-duration"></span>
              </h6>
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
                <i id="heart" className="bi bi-heart"></i>
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
                  {data.tracks.data.map((i, index) => (
                    <tr key={index + 54}>
                      <td
                        onClick={() => {
                          dispatch(likeSongAction(i));
                        }}
                      >
                        <span>
                        {checkLike(i) ? (
                          <i className="fa-solid fa-heart"></i>
                        ) : (
                          <i className="fa-regular fa-heart"></i>
                        )}
                        
                        </span>
                      </td>
                      <td>{index + 1}</td>
                      <td
                        onClick={() => {
                          dispatch(playSongArtistAction(i.artist.name));
                          dispatch(playSongTrackAction(i.title));
                          dispatch(playSongArtAction(i.album.cover));
                          dispatch(setMusicDurationAction(i.duration));
                          dispatch(setMusicPlay(i.preview));
                        }}
                        style={{ width: "60vw" }}
                      >
                        {i.title} <br />{" "}
                        <span id="artist-sub">{data.artist.name}</span>
                      </td>
                      <td>{defineDuration(i.duration)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlbumPage;
