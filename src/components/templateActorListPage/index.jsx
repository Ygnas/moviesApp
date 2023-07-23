import React, { useContext, useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { AuthContext } from "../../contexts/authContext";
import MediaList from "../mediaList";

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

function ActorListPageTemplate({ actors, title, action }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [sortFilter, setSortFilter] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { token } = useContext(AuthContext);

  const genreId = Number(genreFilter);

  let displayedActors = actors
    .filter((a) => {
      return a.name?.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((a) => {
      return genreId > 0 ? a.genre_ids.includes(genreId) : true;
    })
    .sort((a, b) => {
      if (sortFilter) {
        return (a.name > b.name) - (a.name < b.name)
      }
    });

  const handleChange = (type, value) => {
    if (type === "name") {
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
          <MediaList action={action} media={displayedActors} />
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
export default ActorListPageTemplate;
