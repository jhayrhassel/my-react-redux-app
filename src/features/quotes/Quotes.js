import React, { useEffect } from "react";
import {
  loadQuotes,
  selectAuthor,
  selectQuotes,
} from "./quotesSlice";
import { useDispatch, useSelector } from "react-redux";

const Quotes = () => {
  const quotes = useSelector(selectQuotes);
  const author = useSelector(selectAuthor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadQuotes());
  }, [dispatch]);

  return (
    <div className="quote-div">
      <p>"{quotes}"</p>
      <p>{author}</p>
    </div>
  );
};

export default Quotes;
