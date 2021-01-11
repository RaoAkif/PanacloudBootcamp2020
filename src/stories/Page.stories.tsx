import React from 'react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args: any) => <Page {...args} />;

export const LoggedIn: any = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut: any = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
