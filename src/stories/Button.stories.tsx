import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from 'components/atoms';

export default { title: 'Example/Atoms/Button', component: Button } as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Button' };

export const Primary = Template.bind({});
Primary.args = { children: 'Button', color: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Button', color: 'secondary' };

export const Info = Template.bind({});
Info.args = { children: 'Button', color: 'info' };

export const Success = Template.bind({});
Success.args = { children: 'Button', color: 'success' };
