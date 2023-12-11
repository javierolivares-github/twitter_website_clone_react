import CalendarIcon from './CalendarIcon';

/** The **CalendarIcon** component renders a calendar icon. */
export default {
  title: 'atoms/Icons/CalendarIcon',
  component: CalendarIcon,
  tags: ['autodocs'],
  argTypes: {
    fill: {
      description: 'Specifies the fill color of the icon. Accepts one of these formats: HEX, RGB, and HSL.',
      control: 'text',
    },
    size: {
      description: 'Specifies the width and height of the icon. It must a string, and It must be one of the following values:',
      control: 'text',
    },
  },
};

/** This is the default version of the **CalendarIcon** component:*/
export const Default = {
  args: {
    fill: '#172936',
    size: '24',
  },
};
