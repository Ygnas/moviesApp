import React, { useState } from "react";

export const MediaContext = React.createContext(null);

const MediaContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({})
  const [favourites, setFavourites] = useState([]);
  const [favouriteActors, setFavouriteActors] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);
  const [fantasyMovies, setFantasyMovies] = useState([]);

  const addToFavourites = (media) => {
    if (media.title) {
      let updatedFavourites = [...favourites];
      if (!favourites.includes(media.id)) {
        updatedFavourites.push(media.id);
      }
      setFavourites(updatedFavourites);
    } else {
      let updatedFavourites = [...favouriteActors];
      if (!favouriteActors.includes(media.id)) {
        updatedFavourites.push(media.id);
      }
      setFavouriteActors(updatedFavourites);
    }
  };

  const setUploadedImage = (movieTitle, uploadedImage) => {
    setFantasyMovies(fantasyMovies.map(movie =>
      movie.title === movieTitle
        ? { ...movie, uploadedImage }
        : movie
    ));
  };

  const getUploadedImage = (movieTitle) => {
    const movie = fantasyMovies.find(m => m.title === movieTitle);
    return movie?.uploadedImage;
  };

  const addToMustWatch = (movie) => {
    let updatedMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      updatedMustWatch.push(movie.id);
    }
    setMustWatch(updatedMustWatch);
  };

  // We will use this function in a later section
  const removeFromFavourites = (media) => {
    if (media.title) {
      setFavourites(favourites.filter((mId) => mId !== media.id));
    } else {
      setFavourites(favouriteActors.filter((mId) => mId !== media.id));
    }
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review })
  };

  const addFantasyMovie = (movie) => {
    let updatedFantasyMovies = [...fantasyMovies]
    if (!fantasyMovies.includes(movie)) {
      updatedFantasyMovies.push(movie);
    }
    setFantasyMovies(updatedFantasyMovies);
  };

  const getFantasyMovie = (id) => {
    return fantasyMovies.find(movie => movie.title == id);
  };

  return (
    <MediaContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        favouriteActors,
        addReview,
        mustWatch,
        addToMustWatch,
        removeFromMustWatch,
        fantasyMovies,
        addFantasyMovie,
        setUploadedImage,
        getUploadedImage,
        getFantasyMovie
      }}
    >
      {props.children}
    </MediaContext.Provider>
  );
};

export default MediaContextProvider;
