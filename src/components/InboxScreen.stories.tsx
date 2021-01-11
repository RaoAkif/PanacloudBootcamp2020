import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureInboxScreen } from './InboxScreen';
import * as TaskListStories from './TaskList.stories';

export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
  parameters: { assets: ['designs/app.png'] },
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
};

// A super-simple mock of a redux store
const store: any = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

const Template = (args: any) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error: any = Template.bind({});
Error.args = {
  error: 'Something',
};
