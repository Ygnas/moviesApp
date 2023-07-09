import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";
import { useQuery } from "react-query";
import PaginationList from "../components/pagination";

const UpcomingMoviesPage = () => {
  let currentPage = 1;
  const { data, error, isLoading, isError, refetch } = useQuery("upcoming", () => getUpcomingMovies(currentPage));

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

  const upcomingMovies = data ? data.results : [];

  return (
    <>
      <PageTemplate
        title="Upcoming Movies"
        movies={upcomingMovies}
        action={(movie) => {
          return <AddToMustWatchIcon movie={movie} />
        }}
      />
      <PaginationList count={data.total_pages} page={data.page} onChange={handlePageChange} />
    </>
  );
};
export default UpcomingMoviesPage;