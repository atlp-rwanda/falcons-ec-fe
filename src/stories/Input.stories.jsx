import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    type: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export const Default = (args) => <Input {...args} />;
