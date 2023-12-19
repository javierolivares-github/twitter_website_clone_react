import NewsFeed from './NewsFeed';
import { mockServer } from './mockServer';
mockServer();

/** The **NewsFeed** component renders a News Feed Section.*/
export default {
  title: 'patterns/NewsSidebar/NewsFeed',
  component: NewsFeed,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the theme of the component. If isDarkTheme is true, renders a Light version. If it is false, renders a Dark version.',
      control: 'boolean',
    },
  }
};

/** This is the default version of the **NewsFeed** component:*/
export const Default = {
  args: {
    isDarkTheme: false,
  },
};





