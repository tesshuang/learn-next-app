import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {
  src:
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80',
  alt: 'Woman paying for a purchase',
  category: 'JavaScript',
  title: 'Finding customers for your new business',
  description:
    'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.',
};
