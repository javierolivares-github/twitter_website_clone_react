import NavbarWrapper from './NavbarWrapper';

/** The **NavbarWrapper** component renders a navbar's content. When the component is hovered over, it changes to its hover style. Clicking on the component activates a function, which its passed via props. */
export default {
  title: 'patterns/Navbar/NavbarWrapper',
  component: NavbarWrapper,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
    },
    onClickMoon: {
      description: 'Event. When the button Moon is clicked, fires a function.',
    },
    onClickTweet: {
      description: 'Event. When the button Tweet is clicked, fires a function.',
    },
    onClickProfile: {
      description: 'Event. When the button Profile is clicked, fires a function that shows the profile dropdown.',
    },
    onClickMore: {
      description: 'Event. When the button More is clicked, fires a function that shows the more dropdown.',
    },
    imageUrl: {
      description: 'Specifies the path to the image.',
      control: "text",
    },
    username: {
      description: 'Specifies the username.',
      control: "text",
    },
    account: {
      description: 'Specifies the account name.',
      control: "text",
    },
  },
};

/** This is the light version of the **NavbarWrapper** component:*/
export const Light = {
  args: {
    isDarkTheme: false, 
    imageUrl: "../../../../../assets/profile2.png", 
    username: "Jane Doe", 
    account: "@jane28", 
  },
};

/** This is the dark version of the **NavbarWrapper** component:*/
export const Dark = {
  args: {
    isDarkTheme: true, 
    imageUrl: "../../../../../assets/profile2.png", 
    username: "Jane Doe", 
    account: "@jane28", 
  },
};
