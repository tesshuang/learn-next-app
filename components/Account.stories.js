import React from 'react';

import { Account } from './Account';

// This default export determines where you story goes in the story list
export default {
  title: 'Components/Account',
  component: Account,
};

const Template = (args) => <Account {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  /* the args you need here will depend on your component */
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
