import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { selectNextBackgroundImage } from "../backgroundImage/backgroundImageSlice";
import { useDispatch } from "react-redux";

const NextImgBtn = () => {
  const dispatch = useDispatch()

  const onClickNextBtn = () => {
    dispatch(selectNextBackgroundImage());
  };

  return (
    <button className="next-prev-button" onClick={onClickNextBtn}>
      <FontAwesomeIcon className="next-prev-button-icon" icon={faAngleRight} />
    </button>
  );
};

export default NextImgBtn;
