import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = () => <Button>Some Label</Button>;
export const ContainedSmall = () => <Button>Some Label</Button>;
export const ContainedLarge = () => <Button>Some Label</Button>;
