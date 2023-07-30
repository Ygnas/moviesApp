import React, { useContext } from "react";
import PageTemplate from "../components/templateMediaPage";
import { getActor } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";
import MediaActorDetails from "../components/mediaActorDetails";
import { MediaContext } from "../contexts/mediaContext";

const ActorDetailsPage = () => {
  const { id } = useParams();
  const { getFantasyActor } = useContext(MediaContext);

  const fantasyActor = getFantasyActor(id)

  const isNumber = !isNaN(id);

  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>{
      isNumber ?
        <PageTemplate media={actor}>
          < MediaActorDetails actor={actor} />
        </PageTemplate >
        :
        <PageTemplate media={fantasyActor}>
          <MediaActorDetails actor={fantasyActor} />
        </PageTemplate>
    }</>
  );
};

export default ActorDetailsPage;