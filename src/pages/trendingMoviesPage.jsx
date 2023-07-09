import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import PaginationList from "../components/pagination";

const TrendingMoviesPage = (props) => {
  let currentPage = 1;
  const { data, error, isLoading, isError, refetch } = useQuery("trending", () => getTrendingMovies(currentPage));

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const handlePageChange = (page) => {
    currentPage = page;
    refetch()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  const movies = data ? data.results : [];

  return (
    <>
      <PageTemplate
        title="Trending Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
      <PaginationList count={data.total_pages} page={data.page} onChange={handlePageChange} />
    </>
  );
};
export default TrendingMoviesPage;
