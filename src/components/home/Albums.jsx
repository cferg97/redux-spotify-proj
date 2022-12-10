import { useEffect} from "react";
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
      {albums.slice(0, 7).map((i, index) => (
        <div className="card" key={index + 9}>
          <div className="img-container">
            <Link to={"/album/" + i.album.id}>
            <img src={i.album.cover_medium} alt="" />
            </Link>
          </div>
          <div className="card-details">
            <p className="title">{i.album.title}</p>
            <p className="artist">
              {i.artist.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Albums;
