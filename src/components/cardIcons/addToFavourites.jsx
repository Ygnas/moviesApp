import React, { useContext } from "react";
import { MediaContext } from "../../contexts/mediaContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../../contexts/authContext";

const AddToFavouritesIcon = ({ media, styles }) => {
  const context = useContext(MediaContext);
  const { token } = useContext(AuthContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavourites(media);
  };

  return (
    <>
      {
        token && !context.favouriteActors.includes(media.id) && !context.favourites.includes(media.id) ?
          <IconButton sx={styles?.favouriteIcon} aria-label="add to favorites" onClick={onUserSelect} >
            <FavoriteIcon color="primary" />
          </IconButton > : null
      }
    </>
  );
};

export default AddToFavouritesIcon;
