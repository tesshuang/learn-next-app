import React from 'react';
import { Heading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'h1',
  color: 'red',
  children: 'This is a H1',
};
