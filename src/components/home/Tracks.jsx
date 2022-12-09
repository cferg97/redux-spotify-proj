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
    {tracks.slice(0,7).map((i) => (
            <div class="card">
            <div class="img-container">
              <img src={i.album.cover_medium} alt="" />
            </div>
            <div class="card-details">
              <p class="title">{i.album.title}</p>
              <Link to={"/album/" + i.album.id} className="artist">{i.artist.name}</Link>
            </div>
          </div>
    ))}
    </>
  );
};

export default Tracks;
