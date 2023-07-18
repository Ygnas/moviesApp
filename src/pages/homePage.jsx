import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import PaginationList from "../components/pagination";

const HomePage = (props) => {
  let currentPage = 1;
  const { data, error, isLoading, isError, refetch } = useQuery("discover", () => getMovies(currentPage));

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
        title="Discover Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon media={movie} />
        }}
      />
      <PaginationList count={data.total_pages} page={data.page} onChange={handlePageChange} />
    </>
  );
};
export default HomePage;
