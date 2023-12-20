import ButtonIconLogo from './ButtonIconLogo';

/** The **ButtonIconLogo** component displays a button containing the icon of the Twitter. When the button is pointed, it changes to its hover style. When the button is pressed, it triggers a callback function, which can be provided through props. */
export default {
  title: 'atoms/Buttons/ButtonIconLogo',
  component: ButtonIconLogo,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the button. If isDarkTheme is true, renders a dark version of the button. If is false, renders a light version of the button.',
      control: 'boolean',
    },
  },
};

/** This is the light version of the **ButtonIconLogo** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the dark version of the **ButtonIconLogo** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};