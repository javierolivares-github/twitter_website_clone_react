import LinkIcon from './LinkIcon';

/** The **LinkIcon** component renders a link icon. */
export default {
  title: 'atoms/Icons/LinkIcon',
  component: LinkIcon,
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

/** This is the default version of the **LinkIcon** component:*/
export const Default = {
  args: {
    fill: '#172936',
    size: '24',
  },
};