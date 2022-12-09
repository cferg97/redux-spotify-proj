import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbumDataAction } from "../../redux/actions";

const Albums = () => {
  const dispatch = useDispatch();
  let albums = useSelector((state) => state.data.albums);

  const endpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=rise";
  useEffect(() => {
    dispatch(getAlbumDataAction(endpoint));
    console.log([albums]);
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
            <a href="artist.html?id=${item.artist.id}" class="artist">
              {i.artist.name}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Albums;
