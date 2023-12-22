import TweetAnalytics from './TweetAnalytics';

/** The **TweetAnalytics** component displays the Tweet Analytics component. */
export default {
  title: 'patterns/Tweet/TweetAnalytics',
  component: TweetAnalytics,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the theme of the button. If isDarkTheme is true, renders a dark version of the button. If is false, renders a light version of the button.',
      control: 'boolean',
    },
    handleComment: {
      description: 'Function. When the button comment is clicked, fires the handleComment function.',
      action: 'Add Comment!',
    },
    handleRetweet: {
      description: 'Function. When the button retweet is clicked, fires the handleRetweet function.',
      action: 'Add Retweet!',
    },
    handleLike: {
      description: 'Function. When the button like is clicked, fires the handleLike function.',
      action: 'Add Like!',
    },
    handleShare: {
      description: 'Function. When the button share is clicked, fires the handleShare function.',
      action: 'Add Share!',
    },
    commentAmount: {
      description: 'Display the number of comments.',
      control: 'number',
    },
    retweetAmount: {
      description: 'Display the number of retweets.',
      control: 'number',
    },
    likeAmount: {
      description: 'Display the number of likes.',
      control: 'number',
    },
  },
};

/** This is the light version of the **TweetAnalytics** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
    commentAmount: 210,
    retweetAmount: 123,
    likeAmount: 1430,
  },
};

/** This is the dark version of the **TweetAnalytics** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
    commentAmount: 210,
    retweetAmount: 123,
    likeAmount: 1430,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};