import "../comp_css/album.css";

const AlbumPage = () => {
  return (
    <>
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
              src="https://via.placeholder.com/150"
            />
          </div>
          <div className="album-info-cont">
            <h3>Album</h3>
            <h1 id="album-name">Album Name</h1>
            <h6>
              <span id="artist-name">By</span>
              <i className="fa-sharp fa-solid fa-circle"></i>
              <span id="album-year">Year</span>{" "}
              <i className="fa-sharp fa-solid fa-circle"></i>
              <span id="song-num">#songs</span>,{" "}
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
              <tbody id="track-list"></tbody>
            </table>
          </div>
        </div>
      </div>
      </>
  );
};

export default AlbumPage;
