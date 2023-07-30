import React from "react";
import PaginationList from "../components/pagination";

export default {
  title: "PaginationList",
  component: PaginationList,
};

const Template = (args) => <PaginationList {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  count: 10,
  page: 1,
  onChange: () => { },
};

Basic.storyName = "Default";
