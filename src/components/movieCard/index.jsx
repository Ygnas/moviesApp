import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MediaContext } from "../../contexts/mediaContext";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  title: { minHeight: 70 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function MovieCard({ movie, action }) {
  const { favourites, addToFavourites, mustWatch, addToMustWatch } = useContext(MediaContext);
  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false
  }

  if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false
  }

  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        avatar={
          // Shorthand <></> for Fragment - let you group a list of children without adding extra nodes
          // I did it this way because I can only return a single entity,
          // And I wanted to be able to Mark movie as favourite and as a must watch later at the same time.
          // I choose to do it this way because some upcoming movies overlap with movies in homepage.
          <>{
            movie.favourite ? (
              <Avatar sx={styles.avatar}>
                <FavoriteIcon />
              </Avatar>
            ) : null}
            {
              movie.mustWatch ? (
                <Avatar sx={styles.avatar}>
                  <PlaylistAddCheckIcon />
                </Avatar>
              ) : null
            }
          </>
        }
        title={
          <Typography sx={styles.title} variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
