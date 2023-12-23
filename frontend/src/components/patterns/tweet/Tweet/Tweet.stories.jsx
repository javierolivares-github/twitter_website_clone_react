import Tweet from './Tweet';
import { mockServer } from './mockServer';
mockServer();

/** The **Tweet** component renders the Tweet component. */
export default {
  title: 'patterns/Tweet/Tweet',
  component: Tweet,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the theme of the component.',
      control: 'boolean',
    },
  },
};

/** This is the light version of the **Tweet** component:*/
export const TweetLight = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the dark version of the **Tweet** component:*/
export const TweetDark = {
  args: {
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};