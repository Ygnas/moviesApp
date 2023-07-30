import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { MediaContext } from "../../contexts/mediaContext";

const ActorForm = ({ movie }) => {
  const { setFantasyActor } = useContext(MediaContext);

  const [actorName, setActorName] = useState('');
  const [actorBiography, setActorBiography] = useState('');
  const [actorImage, setActorImage] = useState(null);

  const handleImageChange = (event) => {
    setActorImage(event.target.files[0]);
  };

  const addActor = () => {
    const newActor = {
      name: actorName,
      biography: actorBiography,
      image: actorImage ? URL.createObjectURL(actorImage) : null
    };
    setFantasyActor(newActor, movie)
    setActorName('');
    setActorDescription('');
    setActorImage(null);
  };

  return (
    <Grid container direction="column" spacing={2} sx={{ p: 2 }}>
      <TextField
        label="Actor Name"
        variant="outlined"
        value={actorName}
        onChange={(e) => setActorName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Actor Biography"
        variant="outlined"
        value={actorBiography}
        onChange={(e) => setActorBiography(e.target.value)}
        sx={{ mb: 2 }}
      />
      <input type="file" onChange={handleImageChange} />
      <Button variant="contained" color="primary" onClick={addActor} sx={{ mt: 2 }}>
        Add Actor
      </Button>
    </Grid>
  );
}
export default ActorForm;
