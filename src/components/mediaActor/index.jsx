import { Card, CardActionArea, CardHeader, CardMedia } from "@mui/material";
import React from "react";
import img from "../../images/film-poster-placeholder.png";

const MediaActor = ({ actor }) => {

  const styles = {
    card: {
      maxWidth: 100,
      height: 240,
      paddingtop: 25
    },
    media: {
      height: 150,
      width: 100
    },
    header: {
      display: 'flex'
    },
  };

  return (
    <Card sx={styles.card}>
      <CardActionArea>
        <CardMedia
          sx={styles.media}
          image={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : img
          }
        />
        <CardHeader sx={styles.header} subheader={actor.name} />
      </CardActionArea>
    </Card>
  );
};
export default MediaActor
