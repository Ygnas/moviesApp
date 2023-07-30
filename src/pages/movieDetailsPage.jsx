import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMediaPage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { MediaContext } from "../contexts/mediaContext";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const context = useContext(MediaContext);
  const data = context.getFantasyMovie(id);

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie,
    {
      enabled: !data,
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate media={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <PageTemplate media={data}>
          <MovieDetails movie={data} />
        </PageTemplate>
      )}
    </>
  );
};

export default MovieDetailsPage;
