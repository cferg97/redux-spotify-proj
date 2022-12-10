import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const query = useSelector((state) => state.search.query);
  const [searchResults, setResults] = useState([]);

  const fetchResults = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (response.ok) {
        let data = await response.json();
        setResults(data.data);
      } else {
        console.log("Error fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [query]);

  return (
    <>
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
          <h1>Search results for: {query}</h1>
          <br />
          <h2>Top Results</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "1400px",
            }}
          >
            <div
              className="cards-container"
              id="albumsRow"
              style={{ flexWrap: "wrap" }}
            >
              {searchResults.map((i) => (
                <>
                  <div
                    class="card"
                    key={i.album.id}
                    style={{ marginBottom: "5px" }}
                  >
                    <div class="img-container">
                      <Link to={"/album/" + i.album.id}>
                        <img src={i.album.cover_medium} alt="" />
                      </Link>
                    </div>

                    <div class="card-details">
                      <p class="title">{i.album.title}</p>
                      <p class="artist">{i.artist.name}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
