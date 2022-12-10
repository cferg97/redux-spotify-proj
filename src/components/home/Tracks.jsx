import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTrackDataAction } from "../../redux/actions";

const Tracks = () => {
  const dispatch = useDispatch();
  let tracks = useSelector((state) => state.data.tracks);

  const endpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=ONE OK ROCK";

  useEffect(() => {
    dispatch(getTrackDataAction(endpoint));
    console.log([tracks]);
  }, []);

  return (
    <>
      {tracks.slice(0, 7).map((i, index) => (
        <div className="card" key={index + 5}>
          <div className="img-container">
            <Link to={"/album/" + i.album.id}>
              <img src={i.album.cover_medium} alt="" />
            </Link>
          </div>
          <div className="card-details">
            <p className="title">{i.album.title}</p>
            <p className="artist">{i.artist.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tracks;
