import Navbar from './Navbar';

/** The **Navbar** component renders a navbar menu. */
export default {
  title: 'patterns/Navbar/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
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

/** This is the light version of the **Navbar** component:*/
export const NavbarLight = {
  args: {
    isDarkTheme: false, 
    imageUrl: "../../../../../assets/profile2.png", 
    username: "Jane Doe", 
    account: "@jane28", 
  },
};

/** This is the dark version of the **Navbar** component:*/
export const NavbarDark = {
  args: {
    isDarkTheme: true, 
    imageUrl: "../../../../../assets/profile2.png", 
    username: "Jane Doe", 
    account: "@jane28", 
  },
};
