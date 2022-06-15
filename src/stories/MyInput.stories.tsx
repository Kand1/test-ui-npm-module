import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyInput from "../MyInput/MyInput";
export default {
    title: 'Example/MyInput',
    component: MyInput,
} as ComponentMeta<typeof MyInput>;

const Template: ComponentStory<typeof MyInput> = (args) => <MyInput {...args} />;

export const Input = Template.bind({});
Input.args = {
    label: "Label",
    placeholder: "Placeholder"
};

export const BigInput = Template.bind({});
BigInput.args = {
    label: "Label",
    placeholder: "Placeholder",
    big: true,
};

export const WhitePlaceholder = Template.bind({});
WhitePlaceholder.args = {
    label: "Label",
    placeholder: "Placeholder",
    whitePlaceholder: true,
    backgroundColor: "black",
    color: "white"
};

