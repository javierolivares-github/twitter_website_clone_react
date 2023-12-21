import TweetInfo from './TweetInfo';

/** The **TweetInfo** component displays the Header of the Home page. */
export default {
  title: 'patterns/Tweet/TweetInfo',
  component: TweetInfo,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the theme of the button. If isDarkTheme is true, renders a dark version of the button. If is false, renders a light version of the button.',
      control: 'boolean',
    },
    state: {
      description: 'Defines the state of the tweet.',
      control: 'text',
    },
    imageUrl: {
      description: 'Specifies the path to the image.',
      control: 'text',
    },
  },
};

/** This is the light none version of the **TweetInfo** component:*/
export const LightNone = {
  args: {
    isDarkTheme: false,
    state: "none",
    imageUrl: "../../../../../assets/profile4.png",
  },
};

/** This is the light liked version of the **TweetInfo** component:*/
export const LightLiked = {
  args: {
    isDarkTheme: false,
    state: "liked",
    imageUrl: "../../../../../assets/profile4.png",
  },
};

/** This is the light retweeted version of the **TweetInfo** component:*/
export const LightRetweeted = {
  args: {
    isDarkTheme: false,
    state: "retweeted",
    imageUrl: "../../../../../assets/profile4.png",
  },
};

/** This is the light followed version of the **TweetInfo** component:*/
export const LightFollowed = {
  args: {
    isDarkTheme: false,
    state: "followed",
    imageUrl: "../../../../../assets/profile4.png",
  },
};

/** This is the light promoted version of the **TweetInfo** component:*/
export const LightPromoted = {
  args: {
    isDarkTheme: false,
    state: "promoted",
    imageUrl: "../../../../../assets/profile4.png",
  },
};

/** This is the light pinned version of the **TweetInfo** component:*/
export const LightPinned = {
  args: {
    isDarkTheme: false,
    state: "pinned",
    imageUrl: "../../../../../assets/profile4.png",
  },
};

/** This is the dark none version of the **TweetInfo** component:*/
export const DarkNone = {
  args: {
    isDarkTheme: true,
    state: "none",
    imageUrl: "../../../../../assets/profile4.png",
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the dark liked version of the **TweetInfo** component:*/
export const DarkLiked = {
  args: {
    isDarkTheme: true,
    state: "liked",
    imageUrl: "../../../../../assets/profile4.png",
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the dark retweeted version of the **TweetInfo** component:*/
export const DarkRetweeted = {
  args: {
    isDarkTheme: true,
    state: "retweeted",
    imageUrl: "../../../../../assets/profile4.png",
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the dark followed version of the **TweetInfo** component:*/
export const DarkFollowed = {
  args: {
    isDarkTheme: true,
    state: "followed",
    imageUrl: "../../../../../assets/profile4.png",
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the dark promoted version of the **TweetInfo** component:*/
export const DarkPromoted = {
  args: {
    isDarkTheme: true,
    state: "promoted",
    imageUrl: "../../../../../assets/profile4.png",
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the dark pinned version of the **TweetInfo** component:*/
export const DarkPinned = {
  args: {
    isDarkTheme: true,
    state: "pinned",
    imageUrl: "../../../../../assets/profile4.png",
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
