import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from 'components/atoms';

export default { title: 'Example/Button', component: Button } as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Button' };

export const Primary = Template.bind({});
Primary.args = { children: 'Button', color: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Button', color: 'secondary' };
