import React, { useContext } from "react";
import { MediaContext } from "../../contexts/mediaContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MediaContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie)
  };
  return (
    <IconButton aria-label="add to must watch" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;
