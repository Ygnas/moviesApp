import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TrendingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("trending", getTrendingMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default TrendingMoviesPage;
