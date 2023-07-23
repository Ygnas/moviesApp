import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";
import MediaActor from "../mediaActor";

const MediaList = ({ media, action }) => {
  let mediaCards = media.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      {m.title ?
        <Movie key={m.id} movie={m} action={action} />
        :
        <MediaActor key={m.id} actor={m} action={action} />}
    </Grid>
  ));
  return mediaCards;
};

export default MediaList;
