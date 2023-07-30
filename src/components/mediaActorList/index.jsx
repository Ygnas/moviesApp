import { useEffect, useState } from "react";
import { getMediaCast } from "../../api/tmdb-api";
import MediaActor from "../mediaActor";
import { Button, Dialog, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import ActorForm from "../actorForm";

export default function MediaActorList({ media }) {
  const [actors, setActors] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (media.id) {
      getMediaCast(media.id).then((actors) => {
        setActors(actors);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let actorCards = media.actors ? media.actors.map((actor, index) => (
    <Grid key={index} item xl={1}>
      <MediaActor actor={actor} />
    </Grid>
  )) : null;

  if (!media.actors) {
    actorCards = actors?.map((actor) => (
      <Grid key={actor.id} item xl={1} >
        <MediaActor actor={actor} />
      </Grid>
    ))
  }

  return (
    <Grid sx={{ pt: 1 }} container direction="column" spacing={1}>
      <Grid item>
        {media.actors && (
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add New Actor
          </Button>
        )}
      </Grid>
      <Grid item>
        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth={true}>
          <DialogTitle>Add New Actor</DialogTitle>
          <DialogContent>
            <ActorForm movie={media.title} />
          </DialogContent>
        </Dialog>
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          {actorCards}
        </Grid>
      </Grid>
    </Grid>
  );
}