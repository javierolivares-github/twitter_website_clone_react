import MoonIcon from './MoonIcon';

/** The **MoonIcon** component renders a moon icon. */
export default {
  title: 'atoms/Icons/MoonIcon',
  component: MoonIcon,
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

/** This is the filled version of the **MoonIcon** component:*/
export const Filled = {
  args: {
    fill: '#172936',
    size: '24',
    isFilled: true,
  },
};

/** This is the outlined version of the **MoonIcon** component:*/
export const Outlined = {
  args: {
    fill: '#172936',
    size: '24',
    isFilled: false,
  },
};