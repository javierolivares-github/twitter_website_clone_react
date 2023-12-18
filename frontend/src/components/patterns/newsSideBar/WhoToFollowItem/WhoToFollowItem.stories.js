import WhoToFollowItem from './WhoToFollowItem';

/** The **WhoToFollowItem** component is used for Who to follow items. */
export default {
  title: 'patterns/NewsSideBar/WhoToFollowItem',
  component: WhoToFollowItem,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the theme of the component.',
      control: 'boolean',
    },
    imageUrl: {
      description: 'Specifies the path to the image',
      control: 'text',
    },
    username: {
      description: 'Specifies the name of the user.',
      control: 'text',
    },
    account: {
      description: 'Specifies the account of the user.',
      control: 'text',
    },
    onClick: {
      description: 'Event. When the button is clicked, fires an action.',
    },
  },
};

/** This is the light version of the **WhoToFollowItem** component:*/
export const Light = {
  args: {
    isDarkTheme: false, 
    imageUrl: "../../../../../assets/profile2.png", 
    username: "Jane Doe", 
    account: "@janedoe27",
  },
};

/** This is the dark version of the **WhoToFollowItem** component:*/
export const Dark = {
  args: {
    isDarkTheme: true, 
    imageUrl: "../../../../../assets/profile2.png", 
    username: "Jane Doe", 
    account: "@janedoe27",
  },
};



