import React, { useContext, useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../mediaList";
import { AuthContext } from "../../contexts/authContext";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function MovieListPageTemplate({ movies, title, action }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [sortFilter, setSortFilter] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { token } = useContext(AuthContext);

  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title?.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .sort((a, b) => {
      if (sortFilter) {
        return (a.title > b.title) - (a.title < b.title)
      }
    });

  const handleChange = (type, value) => {
    if (type === "title") {
      setTitleFilter(value)
    } else if (type === "sort") {
      setSortFilter(value)
    } else setGenreFilter(value);
  };

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <MovieList action={action} media={displayedMovies} />
        </Grid>
      </Grid>
      {token ?
        <Fab
          color="secondary"
          variant="extended"
          onClick={() => setDrawerOpen(true)}
          sx={styles.fab}
        >
          Filter
        </Fab> : null}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          sortFilter={sortFilter}
        />
      </Drawer>
    </>
  );
}
export default MovieListPageTemplate;
