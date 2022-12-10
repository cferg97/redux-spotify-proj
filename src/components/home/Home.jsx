import "../comp_css/home.css";
import Tracks from "./Tracks";
import Pills from "./Pills";
import Albums from "./Albums";

const Home = () => {
  return (
    <div className="container">
      <div className="top-nav">
        <div className="navigation-btns">
          <div className="previous">
            <img
              src="https://knoxmuseum.org/wp-content/uploads/2016/06/chevron-left-white.png"
              alt=""
            />
          </div>
          <div className="next">
            <img
              src="https://knoxmuseum.org/wp-content/uploads/2016/06/chevron-left-white.png"
              style={{ transform: "scaleX(-1)" }}
              alt=""
            />
          </div>
        </div>
        <div className="account-info">
          <div className="img-container">
            <img src="./assets/profile.jpg" alt="" />
          </div>
          <span className="account-name">Magic Mike</span>
        </div>
      </div>

      <div className="welcome-tracks">
        <h1>Good Morning</h1>
        <div className="track-pills" id="pillsRow">
          <Pills />
        </div>
      </div>

      <div className="albums-row">
        <h2 className="heading">Recommended Albums</h2>
        <div className="cards-container" id="albumsRow">
          <Albums />
          <span className="see-all">See All</span>
        </div>
      </div>

      <div className="tracks-row">
        <h2 className="heading">Top Listened Tracks</h2>
        <p className="sub-heading">
          Discover some of the highest rated artists.
        </p>
        <div className="cards-container" id="tracksRow">
          <Tracks />
          <span className="see-all">See All</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
