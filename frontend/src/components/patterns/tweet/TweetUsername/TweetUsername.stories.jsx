import TweetUsername from './TweetUsername';

/** The **TweetUsername** component displays the Tweet username component. */
export default {
  title: 'patterns/Tweet/TweetUsername',
  component: TweetUsername,
  tags: ['autodocs'],
  argTypes: {
    username: {
      description: 'Defines the username.',
      control: 'text',
    },
    account: {
      description: 'Defines the account.',
      control: 'text',
    },
    verified: {
      description: 'Defines if the account is verified or not.',
      control: 'boolean',
    },
    timestamp: {
      description: 'Defines the timestamp',
      control: 'text',
    },
    handleMenu: {
      description: 'Function that is activated when the user click button menu.',
      action: 'Fires handleMenu!',
    },
    isDarkTheme: {
      description: 'Specifies the theme of the component. If isDarkTheme is true, renders a dark version of the component. If is false, renders a light version of the component.',
      control: 'boolean',
    },
  },
};

/** This is the light version of the **TweetUsername** component:*/
export const Light = {
  args: {
    username: "Jane Doe",
    account: "@janedoe27",
    verified: false,
    timestamp: "7h ago",
    isDarkTheme: false,
  },
};

/** This is the light verified version of the **TweetUsername** component:*/
export const LightVerified = {
  args: {
    username: "Jane Doe",
    account: "@janedoe27",
    verified: true,
    timestamp: "7h ago",
    isDarkTheme: false,
  },
};

/** This is the dark version of the **TweetUsername** component:*/
export const Dark = {
  args: {
    username: "Jane Doe",
    account: "@janedoe27",
    verified: false,
    timestamp: "7h ago",
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the dark verified version of the **TweetUsername** component:*/
export const DarkVerified = {
  args: {
    username: "Jane Doe",
    account: "@janedoe27",
    verified: true,
    timestamp: "7h ago",
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
