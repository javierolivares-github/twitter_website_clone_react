import NavbarProfile from './NavbarProfile';

/** The **NavbarProfile** component renders a navbar's item compound of three elements, an image, headings, and an icon. When the component is hovered over, it changes to its hover style. Clicking on the component activates a function, which its passed via props. */
export default {
  title: 'patterns/Navbar/NavbarItems/NavbarProfile',
  component: NavbarProfile,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'Specifies the path to the image.',
      control: 'text',
    },
    username: {
      description: 'Specifies the name of the user.',
      control: 'text',
    },
    account: {
      description: 'Specifies the name of the account.',
      control: 'text',
    },
    isDarkTheme: {
      description: 'Specifies the style of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
    },
    onClick: {
      description: 'Event. When the component is clicked, it fires a function.',
    },
  },
};

/** This is the light version of the **NavbarProfile** component:*/
export const Light = {
  args: {
    imageUrl: "../../../../../assets/profile2.png",
    username: "Jane Doe",
    account: "@janedoe32",
    isDarkTheme: false,
  },
};

/** This is the dark version of the **NavbarProfile** component:*/
export const Dark = {
  args: {
    imageUrl: "../../../../../assets/profile2.png",
    username: "Jane Doe",
    account: "@janedoe32",
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

