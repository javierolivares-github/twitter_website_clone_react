import TweetInfo from './TweetInfo';

/** The **TweetInfo** component displays the Header of the Home page. */
export default {
  title: 'patterns/Tweet/TweetInfo',
  component: TweetInfo,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the button. If isDarkTheme is true, renders a dark version of the button. If is false, renders a light version of the button.',
      control: 'boolean',
    },
    tweetState: {
      description: 'Defines the state of the tweet. It must be one of these:',
      control: 'text',
    },
  },
};

/** This is the light none version of the **TweetInfo** component:*/
export const LightNone = {
  args: {
    isDarkTheme: false,
    tweetState: "none",
  },
};

/** This is the light liked version of the **TweetInfo** component:*/
export const LightLiked = {
  args: {
    isDarkTheme: false,
    tweetState: "liked",
  },
};

/** This is the dark version of the **TweetInfo** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
    tweetState: "liked",
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};