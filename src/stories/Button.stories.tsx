import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from 'components/atoms';

export default {
  title: 'Example/Atoms/Button',
  component: Button,
  args: { children: 'Button' },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { color: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { color: 'secondary' };

export const Info = Template.bind({});
Info.args = { color: 'info' };

export const Success = Template.bind({});
Success.args = { color: 'success' };
