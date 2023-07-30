import React from "react";
import MediaHeader from "../components/headerMedia";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Movie Details Page/MovieHeader",
  component: MediaHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <MediaHeader movie={SampleMovie} />;

Basic.storyName = "Default";
