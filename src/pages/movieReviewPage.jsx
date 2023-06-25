import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMediaPage";
import MovieReview from "../components/movieReview";

const MovieReviewPage = (props) => {
  const { state: { movie, review } } = useLocation()
  return (
    <PageTemplate media={movie}>
      <MovieReview review={review} />
    </PageTemplate>
  );
};

export default MovieReviewPage;
