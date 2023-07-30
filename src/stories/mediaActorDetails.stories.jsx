import React from "react";
import MediaActorDetails from "../components/mediaActorDetails";
import SampleActor from "./sampleData";
import ProtectedRoute from "../protectedRoute";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Media Actor Details Page/MediaActorDetails",
  component: MediaActorDetails,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <ProtectedRoute>{Story()}</ProtectedRoute>
      </MemoryRouter>
    ),
  ],
};

export const Basic = () => <MediaActorDetails actor={SampleActor} />;

Basic.storyName = "Default";
