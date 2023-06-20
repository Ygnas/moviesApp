import { useEffect, useState } from "react";
import { getMediaCast } from "../../api/tmdb-api";
import MediaActor from "../mediaActor";
import { Grid } from "@mui/material";

export default function MediaActorList({ media }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getMediaCast(media.id).then((actors) => {
      setActors(actors);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let actorCards = actors.map((actor) => (
    <Grid key={actor.id} item xl={1} >
      <MediaActor actor={actor} />
    </Grid>
  ))

  return (
    <Grid sx={{ pt: 1 }} container spacing={1}>
      {actorCards}
    </Grid>
  )
}