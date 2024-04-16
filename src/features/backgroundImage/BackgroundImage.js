import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadBackgroundImage, selectedBackgroundImage, selectedBackgroundImageIndex } from "./BackgroundImageSlice";


const BackgroundImage = () => {
  const dispatch = useDispatch();
  const backgroundImage = useSelector(selectedBackgroundImage);
  const backgroundImageIndex = useSelector(selectedBackgroundImageIndex);

  useEffect(() => {
    dispatch(loadBackgroundImage());
  }, [dispatch]);

  return (
    <div className="background-image-container">
      <img src={backgroundImage[backgroundImageIndex]} alt="" className="background-image" />
    </div>
  );
};

export default BackgroundImage;