import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from 'components/molecules';
import { Button } from 'components/atoms';
import { Search } from '@material-ui/icons';

export default { title: 'Example/Molecules/Card', component: Card } as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Cards contain content and actions about a single subject.',
  action: <Button>Button</Button>,
  avatar: <Search />,
  subheader: 'Cards contain content and actions about a single subject.',
  title: 'Card',
};
