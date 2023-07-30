import React, { useEffect, useState } from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";
import MediaActor from "../mediaActor";

const MediaList = ({ media, action }) => {
  const [ordered, setOrdered] = useState(media);

  useEffect(() => {
    setOrdered(media);
  }, [media]);

  const moveLeft = (id) => {
    const index = ordered.findIndex((m) => m.id === id);
    if (index > 0) {
      const newOrderedMedia = [...ordered];
      [newOrderedMedia[index - 1], newOrderedMedia[index]] = [newOrderedMedia[index], newOrderedMedia[index - 1]];
      setOrdered(newOrderedMedia);
    }
  };

  const moveRight = (id) => {
    const index = ordered.findIndex((m) => m.id === id);
    if (index < ordered.length - 1) {
      const newOrderedMedia = [...ordered];
      [newOrderedMedia[index], newOrderedMedia[index + 1]] = [newOrderedMedia[index + 1], newOrderedMedia[index]];
      setOrdered(newOrderedMedia);
    }
  };

  return (
    <>
      {ordered.map((m) => (
        <Grid key={m.id || m.title} item xs={12} sm={6} md={4} lg={3} xl={2}>
          {m.title ? <Movie movie={m} action={action} moveLeft={moveLeft} moveRight={moveRight} /> : <MediaActor actor={m} action={action} />}
        </Grid>
      ))}
    </>
  );
};

export default MediaList;