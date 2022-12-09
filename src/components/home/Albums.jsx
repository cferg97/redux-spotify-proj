import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbumDataAction } from "../../redux/actions";
import { Link } from "react-router-dom";

const Albums = () => {
  const dispatch = useDispatch();
  let albums = useSelector((state) => state.data.albums);

  const endpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=scandroid";
  useEffect(() => {
    dispatch(getAlbumDataAction(endpoint));
  }, []);
  return (
    <>
      {albums.slice(0, 7).map((i) => (
        <div class="card">
          <div class="img-container">
            <img src={i.album.cover_medium} alt="" />
          </div>
          <div class="card-details">
            <p class="title">{i.album.title}</p>
            <Link to={"/album/" + i.album.id} class="artist">
              {i.artist.name}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Albums;
