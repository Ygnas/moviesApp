import React, { useContext } from "react";
import { MediaContext } from "../../contexts/mediaContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../../contexts/authContext";

const AddToFavouritesIcon = ({ media }) => {
  const context = useContext(MediaContext);
  const { token } = useContext(AuthContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavourites(media);
  };

  return (
    <>
      {
        token ?
          <IconButton aria- label="add to favorites" onClick={onUserSelect} >
            <FavoriteIcon color="primary" fontSize="large" />
          </IconButton > : () => { }
      }
    </>
  );
};

export default AddToFavouritesIcon;
