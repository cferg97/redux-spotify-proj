import "./comp_css/musicplayer.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MusicPlayer = () => {
  const trackName = useSelector((state) => state.playSongs.track);
  const artistName = useSelector((state) => state.playSongs.artist);
  const albumArt = useSelector((state) => state.playSongs.art);
  const duration = useSelector((state) => state.playSongs.duration);
  const song = useSelector((state) => state.playSongs.audio);
  const [songVolume, setVolume] = useState(0.5);

  let audio = new Audio(song);

  const start = () => {
    audio.play();
    audio.volume = songVolume;
  };

  const defineDuration = (t) => {
    return Math.floor(t / 60) + ":" + ("0" + Math.floor(t % 60)).slice(-2);
  };

  const newDuration = defineDuration(duration);

  return (
    <div className="music-player">
      <div className="album-details">
        <img
          alt=""
          className="album-artwork"
          src={
            albumArt
              ? albumArt
              : "https://www.stlzoo.org/files/3213/0798/4082/capybara.jpg"
          }
        />
        <div className="album-text">
          <h4>{trackName ? trackName : "play a song"}</h4>
          <h5>{artistName ? artistName : "to see info here"}</h5>
        </div>
        <div className="icons">
          <i className="bi bi-heart"></i>
          <i className="bi bi-pip"></i>
        </div>
      </div>

      <div className="player-controls">
        <div className="control-buttons">
          <i className="bi bi-shuffle" style={{ fontSize: "0.5em" }}></i>
          <i className="bi bi-skip-start" style={{ fontSize: "0.6em" }}></i>
          <i
            onClick={start}
            className="bi bi-play-fill"
            style={{ fontSize: "1em" }}
          ></i>
          <i className="bi bi-skip-end" style={{ fontSize: "0.6em" }}></i>
          <i className="bi bi-repeat" style={{ fontSize: "0.6em" }}></i>
        </div>
        <div className="bar-container">
          <span id="time-remain">0:00</span>
          <div className="music-bar"></div>
          <span id="time-total">{duration ? newDuration : "0:00"}</span>
        </div>
      </div>

      <div className="media-controls">
        <i className="bi bi-music-note-list"></i>
        <i className="bi bi-speaker"></i>
        <i className="fa-solid fa-volume-high"></i>
        <input
          id="volume"
          type="range"
          min={0}
          max={1}
          defaultValue={songVolume}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber);
          }}
          step={0.02}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
