import TweetButton from './TweetButton';

/** The **TweetButton** component renders a Tweet button. When the button is pressed, it triggers a callback function, which can be provided through props. */
export default {
  title: 'atoms/Buttons/TweetButton',
  component: TweetButton,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the button. If isDarkTheme is true, renders a dark version of the button. If is false, renders a light version of the button.',
      control: 'boolean',
    },
    size: {
      description: 'Specifies the size of the button. It should be one of these values:',
      control: 'text',
    },
    onClick: {
      description: 'Event. When the button is clicked, triggers a function.',
    },
    children: {
      description: 'Specifies the content of the button.',
      control: 'text',
    },
  },
};

/** This is the light large version of the **TweetButton** component:*/
export const LightLarge = {
  args: {
    isDarkTheme: false,
    size: "large",
    children: "Tweet",
  },
};

/** This is the light small version of the **TweetButton** component:*/
export const LightSmall = {
  args: {
    isDarkTheme: false,
    size: "small",
    children: "Tweet",
  },
};

/** This is the dark large version of the **TweetButton** component:*/
export const DarkLarge = {
  args: {
    isDarkTheme: true,
    size: "large",
    children: "Tweet",
  },
};

/** This is the dark small version of the **TweetButton** component:*/
export const DarkSmall = {
  args: {
    isDarkTheme: true,
    size: "small",
    children: "Tweet",
  },
};