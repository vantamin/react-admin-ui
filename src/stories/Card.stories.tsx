import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from 'components/molecules';
import { Button } from 'components/atoms';
import { Search } from '@material-ui/icons';

export default {
  title: 'Example/Molecules/Card',
  component: Card,
  argTypes: { component: {} },
  args: {
    children: 'Cards contain content and actions about a single subject.',
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});

export const Title = Template.bind({});
Title.args = { title: 'Card' };

export const SubTitle = Template.bind({});
SubTitle.args = {
  ...Title.args,
  subheader: 'Cards contain content and actions about a single subject.',
};

export const Icon = Template.bind({});
Icon.args = {
  ...SubTitle.args,
  avatar: <Search />,
};

export const Expand = Template.bind({});
Expand.args = {
  ...Icon.args,
  expand: true,
};

export const NonExpand = Template.bind({});
NonExpand.args = {
  ...Icon.args,
  action: <Button>Button</Button>,
};
