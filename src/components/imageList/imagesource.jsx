import { ImageListItem } from "@mui/material";
import React, { useContext } from "react";
import img from "../../images/film-poster-placeholder.png";
import { MediaContext } from "../../contexts/mediaContext";

export function ImageSource({ path, title }) {
  const { getUploadedImage, setUploadedImage } = useContext(MediaContext);
  const uploadedImage = getUploadedImage(title);

  const handleUpload = event => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setUploadedImage(title, url);
  }

  return (
    <ImageListItem key={path || title} cols={1}>
      {
        path
          ? <img src={`https://image.tmdb.org/t/p/w500/${path}`} alt={path} />
          : [< input type="file" onChange={handleUpload} />, <img src={uploadedImage || img} alt="Placeholder" />]
      }
    </ImageListItem>
  );
};