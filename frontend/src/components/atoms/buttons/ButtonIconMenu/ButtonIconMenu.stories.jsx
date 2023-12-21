import ButtonIconMenu from './ButtonIconMenu';

/** The **ButtonIconMenu** component displays a button containing the more icon. When the button is pressed, it triggers a callback function, which can be provided through props. */
export default {
  title: 'atoms/Buttons/ButtonIconMenu',
  component: ButtonIconMenu,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the theme of the button. If isDarkTheme is true, renders a dark version of the button. If is false, renders a light version of the button.',
      control: 'boolean',
    },
    onClick: {
      description: 'Event. When the button is clicked, triggers a function.',
    },
  },
};

/** This is the light version of the **ButtonIconMenu** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the dark version of the **ButtonIconMenu** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};