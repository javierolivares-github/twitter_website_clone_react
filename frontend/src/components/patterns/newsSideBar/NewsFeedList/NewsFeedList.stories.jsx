import NewsFeedList from './NewsFeedList';
import { newsCollection } from '../../../../data/newsCollection';

/** The **NewsFeedList** component renders a list of News Feed Items. This component has three states: loading, error, and loaded. Loading state shows a loading message. Error state shows an error message. Loaded state renders the component with the data recieved.*/
export default {
  title: 'patterns/NewsSidebar/NewsFeedList',
  component: NewsFeedList,
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

/** This is the loaded light version of the **NewsFeedList** component:*/
export const LoadedLight = {
  args: {
    status: "loaded",
    data: newsCollection,
    isDarkTheme: false,
  },
};

/** This is the loading light version of the **NewsFeedList** component:*/
export const LoadingLight = {
  args: {
    status: "loading",
    data: newsCollection,
    isDarkTheme: false,
  },
};

/** This is the error light version of the **NewsFeedList** component:*/
export const ErrorLight = {
  args: {
    status: "error",
    data: newsCollection,
    isDarkTheme: false,
  },
};

/** This is the loaded dark version of the **NewsFeedList** component:*/
export const LoadedDark = {
  args: {
    status: "loaded",
    data: newsCollection,
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the loading dark version of the **NewsFeedList** component:*/
export const LoadingDark = {
  args: {
    status: "loading",
    data: newsCollection,
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the error dark version of the **NewsFeedList** component:*/
export const ErrorDark = {
  args: {
    status: "error",
    data: newsCollection,
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};




