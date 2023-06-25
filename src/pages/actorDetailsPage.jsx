import React from "react";
import PageTemplate from "../components/templateMediaPage";
import { getActor } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";
import MediaActorDetails from "../components/mediaActorDetails";

const ActorDetailsPage = () => {
  const { id } = useParams();

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
    <PageTemplate media={actor}>
      <MediaActorDetails actor={actor} />
    </PageTemplate>
  );
};

export default ActorDetailsPage;
