import TweetCard from './TweetCard';

/** The **TweetCard** component displays the TweetCard component. */
export default {
  title: 'patterns/Tweet/TweetCard',
  component: TweetCard,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the theme of the component. If isDarkTheme is true, renders a dark version of the component. If is false, renders a light version of the component.',
      control: 'boolean',
    },
    state: {
      description: 'Defines the state of the TweetInfo component.',
      options: ["none", "liked", "retweeted", "followed", "promoted", "pinned"],
    },
    infoImageUrl: {
      description: 'Defines the path to the TweetInfo image.',
      control: 'text',
    },
    username: {
      description: 'Defines the username.',
      control: 'text',
    },
    account: {
      description: 'Defines the name of the account.',
      control: 'text',
    },
    verified: {
      description: 'Defines if it verified or not.',
      control: 'bool',
    },
    timestamp: {
      description: 'Defines the timestamp.',
      control: 'text',
    },
    content: {
      description: 'Defines the content.',
      control: 'text',
    },
    hasImage: {
      description: 'Defines if the component has a content image or not.',
      control: 'bool',
    },
    contentImageUrl: {
      description: 'Defines the path to the content image.',
      control: 'text',
    },
    commentAmount: {
      description: 'Shows the number of comments.',
      control: 'number',
    },
    retweetAmount: {
      description: 'Shows the number of retweets.',
      control: 'number',
    },
    likeAmount: {
      description: 'Shows the number of likes.',
      control: 'number',
    },
    handleComment: {
      description: 'Function that is activated when the user click button comment.',
      action: 'Fires handleComment!',
    },
    handleRetweet: {
      description: 'Function that is activated when the user click button retweet.',
      action: 'Fires handleRetweet!',
    },
    handleLike: {
      description: 'Function that is activated when the user click button Like.',
      action: 'Fires handleLike!',
    },
    handleShare: {
      description: 'Function that is activated when the user click button Share.',
      action: 'Fires handleShare!',
    },
    handleMenu: {
      description: 'Function that is activated when the user click button Menu.',
      action: 'Fires handleMenu!',
    },
  },
};

/** This is the light version of the **TweetCard** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
    state: "liked",
    infoImageUrl: "../../../../../assets/profile4.png",
    username: "Bruce Wayne",
    account: "@bruce77",
    verified: true,
    timestamp: "12h ago",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    hasImage: true,
    contentImageUrl: "../../../../../assets/virtualBoy.jpg",
    commentAmount: 315,
    retweetAmount: 167,
    likeAmount: 1300,
  },
};
