import { ImageListItem } from "@mui/material";
import React from "react";
import img from "../../images/film-poster-placeholder.png";

export function ImageSource({ path }) {
  return (
    <ImageListItem key={path} cols={1}>
      {
        path
          ? <img src={`https://image.tmdb.org/t/p/w500/${path}`} alt={path} />
          : <img src={img} alt={path} />
      }
    </ImageListItem>
  );
};
