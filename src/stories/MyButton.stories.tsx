import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyButton from "../MyButton/MyButton";

export default {
    title: 'Example/MyButton',
    component: MyButton,
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const Btn = Template.bind({});
Btn.args = {
    label: "Label"
};

export const BigBtn = Template.bind({});
BigBtn.args = {
    big: true,
    label: "Label"
};

export const ErrorBtn = Template.bind({});
ErrorBtn.args = {
    backgroundColor: "RED",
    color: "WHITE",
    label: "Error",
};

export const WarningBtn = Template.bind({});
WarningBtn.args = {
    backgroundColor: 'ORANGE',
    color: "WHITE",
    label: 'Warning',
};


