import TweetList from './TweetList';
import { tweetCollection } from '../../../../data/tweetCollection';

/** The **TweetList** component renders a list of Tweet Cards. This component has three states: loading, error, and loaded. Loading state shows a loading message. Error state shows an error message. Loaded state renders the component with the data recieved.*/
export default {
  title: 'patterns/Tweet/TweetList',
  component: TweetList,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Specifies the state of the data. It must be one of these:',
      control: 'select', 
      options: ['loading', 'error', 'loaded'],
    },
    data: {
      description: 'Recieve the data.',
      control: 'object',
    },
    isDarkTheme: {
      description: 'Specifies the theme of the component. If isDarkTheme is true, renders a Light version. If it is false, renders a Dark version.',
      control: 'boolean',
    },
  },
};

/** This is the loaded light version of the **TweetList** component:*/
export const LoadedLight = {
  args: {
    status: "loaded",
    data: tweetCollection,
    isDarkTheme: false,
  },
};

/** This is the loading light version of the **TweetList** component:*/
export const LoadingLight = {
  args: {
    status: "loading",
    data: tweetCollection,
    isDarkTheme: false,
  },
};

/** This is the error light version of the **TweetList** component:*/
export const ErrorLight = {
  args: {
    status: "error",
    data: tweetCollection,
    isDarkTheme: false,
  },
};

/** This is the loaded dark version of the **TweetList** component:*/
export const LoadedDark = {
  args: {
    status: "loaded",
    data: tweetCollection,
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the loading dark version of the **TweetList** component:*/
export const LoadingDark = {
  args: {
    status: "loading",
    data: tweetCollection,
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the error dark version of the **TweetList** component:*/
export const ErrorDark = {
  args: {
    status: "error",
    data: tweetCollection,
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};