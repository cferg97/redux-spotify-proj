import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrackDataAction } from "../../redux/actions";

const Tracks = () => {
  const dispatch = useDispatch();
  let tracks = useSelector((state) => state.data.tracks);

  const endpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

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
              <a href="artist.html?id=${item.artist.id}" class="artist">{i.artist.name}</a>
            </div>
          </div>
    ))}
    </>
  );
};

export default Tracks;
