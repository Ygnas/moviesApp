import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const MediaHeader = ({ data }) => {
  const favouriteMovies = JSON.parse(localStorage.getItem("favourites"));
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      {favouriteMovies?.some(m => m.id === data.id) ? (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar>
      ) : null}
      <Typography variant="h4" component="h3">
        {data.title || data.name}{"   "}
        {
          data.homepage
            ? <a href={data.homepage}>
              <HomeIcon color="primary" fontSize="='large" />
            </a>
            : null
        }
        <br />
        {
          data.tagline
            ? <span>{`${data.tagline}`} </span>
            : null
        }
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MediaHeader;
