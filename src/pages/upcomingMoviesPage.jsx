import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import { useQuery } from "react-query";

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const upcomingMovies = data ? data.results : [];

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;