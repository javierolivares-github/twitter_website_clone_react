import GifIcon from './GifIcon';

/** The **GifIcon** component renders a gif icon. */
export default {
  title: 'atoms/Icons/GifIcon',
  component: GifIcon,
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

/** This is the default version of the **GifIcon** component:*/
export const Default = {
  args: {
    fill: '#172936',
    size: '24',
  },
};