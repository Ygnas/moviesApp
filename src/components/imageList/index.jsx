import { ImageSource } from './imagesource';
import { ImageList } from "@mui/material";
import React from "react";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const Image = ({ image }) => {
  if (!image?.poster_path) {
    return (
      <ImageList cols={1}>
        <ImageSource path={image?.profile_path} title={image?.title} key={image?.title?.replace(/\s/g, "")} />
      </ImageList>
    );
  }

  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: image.id }],
    getMovieImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const images = image.profile_path ? [image] : data.posters

  return (
    <ImageList cols={1}>
      {images.map((i) => (
        <ImageSource path={i.file_path} key={i.file_path} />
      ))}
    </ImageList>
  );
};
export default Image
