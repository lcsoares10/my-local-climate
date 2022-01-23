
// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonTheme from './index'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonTheme',
  component: ButtonTheme,
} as ComponentMeta<typeof ButtonTheme>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ButtonTheme> = (args) => <ButtonTheme {...args} />;

export const Dark = Template.bind({});
export const Light = Template.bind({});

Dark.args = {
  type: "dark",

};

Light.args = {
  type: "light",
};