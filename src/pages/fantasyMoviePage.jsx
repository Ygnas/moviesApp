import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MediaContext } from "../contexts/mediaContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const FantasyMovie = (props) => {
  const { context, fantasyMovies } = useContext(MediaContext);
  const { token } = useContext(AuthContext);
  return (
    <PageTemplate
      title={
        <>
          Fantasy Movie
          {
            token ?
              <Link to={`/movie/form`}>
                <Button size="medium" variant="contained" color="success">
                  Add new fantasy movie
                </Button>
              </Link> :
              () => { }}
        </>
      }
      movies={fantasyMovies}
      action={() => { }}
    />
  );
};
export default FantasyMovie;
