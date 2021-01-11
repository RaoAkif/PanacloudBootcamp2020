import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args: any) => <Header {...args} />;

export const LoggedIn: any = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut: any = Template.bind({});
LoggedOut.args = {};
