import React from "react";
import LoginPage from "../pages/loginPage";
import { MemoryRouter } from "react-router";
import AuthContextProvider from "../contexts/authContext";

export default {
  title: "Login Page/LoginPage",
  component: LoginPage,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}><AuthContextProvider>{Story()}</AuthContextProvider></MemoryRouter>,
  ],
};

export const Basic = () => <LoginPage />;

Basic.storyName = "Default";
