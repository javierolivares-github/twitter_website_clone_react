import ButtonIconEvents from './ButtonIconEvents';

/** The **ButtonIconEvents** component displays a button containing the icon of an Event. When the button is pressed, it triggers a callback function, which can be provided through props. */
export default {
  title: 'atoms/Buttons/ButtonIconEvents',
  component: ButtonIconEvents,
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

/** This is the light version of the **ButtonIconEvents** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the dark version of the **ButtonIconEvents** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
};