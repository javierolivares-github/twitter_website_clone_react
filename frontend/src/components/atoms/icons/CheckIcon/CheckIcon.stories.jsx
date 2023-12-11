import CheckIcon from './CheckIcon';

/** The **CheckIcon** component renders a check icon. */
export default {
  title: 'atoms/Icons/CheckIcon',
  component: CheckIcon,
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
    isFilled: {
      description: 'Specifies the style of the icon. If its value is true, renders a filled version. If its false, renders an outlined version.',
      control: 'boolean',
    },
  },
};

/** This is the default version of the **CheckIcon** component:*/
export const Filled = {
  args: {
    fill: '#172936',
    size: '24',
  },
};