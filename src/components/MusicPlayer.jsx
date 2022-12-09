import "./comp_css/musicplayer.css"

const MusicPlayer = () => {
    return ( 
        <div class="music-player">
        <div class="album-details">
            <img alt="" class="album-artwork" src="https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png"/>
            <div class="album-text">
                <h4>One More Time</h4>
                <h5>Daft Punk</h5>
            </div>
            <div class="icons">
                <i class="bi bi-heart"></i>
                <i class="bi bi-pip"></i>
            </div>
        </div>
    
        <div class="player-controls">
            <div class="control-buttons">
                <i class="bi bi-shuffle" style={{fontSize: "0.5em;"}}></i>
                <i class="bi bi-skip-start" style={{fontSize: "0.6em;"}}></i>
                <i class="bi bi-play-fill" style={{fontSize: "1em;"}}></i>
                <i class="bi bi-skip-end" style={{fontSize: "0.6em;"}}></i>
                <i class="bi bi-repeat" style={{fontSize: "0.6em;"}}></i>
            </div>
            <div class="bar-container">
                <span id="time-remain">0:00</span>
                <div class="music-bar"></div>
                <span id="time-total">0:00</span>
            </div>
        </div>  
    
        <div class="media-controls">
            <i class="bi bi-music-note-list"></i>
            <i class="bi bi-speaker"></i>
            <i class="fa-solid fa-volume-high"></i>
            <input id="volume" type="range"/>
        </div>
    </div>
     );
}
 
export default MusicPlayer;