import ButtonIconMoon from './ButtonIconMoon';

/** The **ButtonIconMoon** component displays a button containing the icon of an Moon. When the button is pointed, it changes to its hover style. When the button is pressed, it triggers a callback function, which can be provided through props. */
export default {
  title: 'atoms/Buttons/ButtonIconMoon',
  component: ButtonIconMoon,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the button. If isDarkTheme is true, renders a dark version of the button. If is false, renders a light version of the button.',
      control: 'boolean',
    },
    onClick: {
      description: 'Event. When the button is clicked, triggers a function.',
    },
  },
};

/** This is the light version of the **ButtonIconMoon** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the dark version of the **ButtonIconMoon** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
};