import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { MoviesContext } from "../contexts/moviesContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const FantasyMovie = (props) => {
  const { fantasyMovies } = useContext(MoviesContext);
  return (
    <PageTemplate
      title={
        <>
          Fantasy Movie
          <Link to={`/movie/form`}>
            <Button size="medium" variant="contained" color="success">
              Add new fantasy movie
            </Button>
          </Link>
        </>
      }
      movies={fantasyMovies}
      action={() => { }}
    />
  );
};
export default FantasyMovie;
