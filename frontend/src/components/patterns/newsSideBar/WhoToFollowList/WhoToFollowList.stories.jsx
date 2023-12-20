import WhoToFollowList from './WhoToFollowList';
import { followCollection } from '../../../../data/followCollection';

/** The **WhoToFollowList** component renders a list of users who to follow. This component has three states: loading, error, and loaded. Loading state shows a loading message. Error state shows an error message. Loaded state renders the component with the data recieved.*/
export default {
  title: 'patterns/NewsSidebar/WhoToFollowList',
  component: WhoToFollowList,
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
    onClick: {
      description: 'Event. When the button is clicked, fires an action.'
    }
  },
};

/** This is the loaded light version of the **WhoToFollowList** component:*/
export const LoadedLight = {
  args: {
    status: "loaded",
    data: followCollection,
    isDarkTheme: false,
  },
};

/** This is the loading light version of the **WhoToFollowList** component:*/
export const LoadingLight = {
  args: {
    status: "loading",
    data: [],
    isDarkTheme: false,
  },
};

/** This is the error light version of the **WhoToFollowList** component:*/
export const ErrorLight = {
  args: {
    status: "error",
    data: [],
    isDarkTheme: false,
  },
};

/** This is the loaded dark version of the **WhoToFollowList** component:*/
export const LoadedDark = {
  args: {
    status: "loaded",
    data: followCollection,
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the loading dark version of the **WhoToFollowList** component:*/
export const LoadingDark = {
  args: {
    status: "loading",
    data: [],
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the error dark version of the **WhoToFollowList** component:*/
export const ErrorDark = {
  args: {
    status: "error",
    data: [],
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};




