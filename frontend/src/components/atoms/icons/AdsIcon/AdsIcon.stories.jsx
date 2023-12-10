import AdsIcon from './AdsIcon';

/** The **AdsIcon** component renders an advertisment icon. */
export default {
  title: 'atoms/Icons/AdsIcon',
  component: AdsIcon,
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

/** This is the default version of the **AdsIcon** component:*/
export const Default = {
  args: {
    fill: '#000000',
    size: '24',
  },
};