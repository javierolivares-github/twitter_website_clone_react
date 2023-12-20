import WhoToFollow from './WhoToFollow';
import { mockServer } from './mockServer';
mockServer();

/** The **WhoToFollow** component renders a Who To Follow Section.*/
export default {
  title: 'patterns/NewsSidebar/WhoToFollow',
  component: WhoToFollow,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the theme of the component. If isDarkTheme is true, renders a Light version. If it is false, renders a Dark version.',
      control: 'boolean',
    },
    onClick: {
      description: 'Event. When the button is clicked, fires an action.'
    }
  }
};

/** This is the light version of the **WhoToFollow** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the dark version of the **WhoToFollow** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};





