import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args: any) => <Button {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large: any = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small: any = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
