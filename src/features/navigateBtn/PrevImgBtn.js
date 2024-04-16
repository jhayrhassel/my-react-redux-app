import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { selectPreviousBackgroundImage } from "../backgroundImage/BackgroundImageSlice";

const PrevImgBtn = () => {
  const dispatch = useDispatch();

  const onClickPrevBtn = () => {
    dispatch(selectPreviousBackgroundImage());
  };

  return (
    <button className="next-prev-button" onClick={onClickPrevBtn}>
      <FontAwesomeIcon className="shit-class" icon={faAngleLeft} />
    </button>
  );
};

export default PrevImgBtn;