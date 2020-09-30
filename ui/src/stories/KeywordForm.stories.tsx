import React from "react";
import { action } from "@storybook/addon-actions";

import KeywordForm from "../modules/pagerank/components/keyword-form.component";

export default {
  title: "KeywordForm",
  component: KeywordForm,
  excludeStories: /.*Data$/,
};

export const actionsData = {
  handleSubmit: action("handleSubmit"),
};

export const Default = () => (
  <KeywordForm keywords={["headphones"]} {...actionsData} />
);
