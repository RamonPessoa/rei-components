// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import UiButton from "../Components/Ui/Button/Button";
import GroupsUi from "../Components/Groups/UI/Ui";

export default {
  title: "Ui",
  component: GroupsUi,
} as ComponentMeta<typeof GroupsUi>;

export const Button: ComponentStory<typeof UiButton> = () => (
  <UiButton content="Texto" />
);
