import React from "react";
import ActorForm from "../components/actorForm";
import SampleMovie from "./sampleData";
import { MediaContext } from "../contexts/mediaContext";

export default {
  title: "Actor Form Page/ActorForm",
  component: ActorForm,
  decorators: [
    (Story) => <MediaContext.Provider value={{ setFantasyActor: () => { } }}>{Story()}</MediaContext.Provider>,
  ],
};

export const Basic = () => <ActorForm movie={SampleMovie} />;

Basic.storyName = "Default";