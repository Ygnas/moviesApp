import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { MediaContext } from "../contexts/mediaContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";

const FavouriteActorPage = (props) => {
  const { favouriteActors } = useContext(MediaContext);

  // Create an array of queries and run them in parallel.

  const favouriteActorQueries = useQueries(
    favouriteActors.map((actor) => {
      return {
        queryKey: ["actor", { id: actor }],
        queryFn: getActor,
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favouriteActorQueries.map((q) => q.data);

  return (
    <PageTemplate
      title="Favourite Actors"
      actors={actors}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavourites movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavouriteActorPage;
