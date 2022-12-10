import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPillDataAction } from "../../redux/actions";

const Pills = () => {
  const dispatch = useDispatch();
  let pills = useSelector((state) => state.data.pills);

  const endpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=alternative";

  useEffect(() => {
    dispatch(getPillDataAction(endpoint));
    console.log([pills]);
  }, []);
  return (
    <>
      {pills.slice(0, 10).map((i, index) => (
        <div className="track-pill" key={index + 2}>
          <div className="img-container">
            <img src={i.artist.picture_medium} alt="" />
          </div>
          <div className="track-details">
            <p className="text">{i.title}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pills;
