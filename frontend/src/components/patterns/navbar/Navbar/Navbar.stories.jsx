import Navbar from './Navbar';

/** The **Navbar** component renders a navbar menu. */
export default {
  title: 'patterns/Navbar/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
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
    imageUrl: "../../../../../assets/profile2.png", 
    username: "Jane Doe", 
    account: "@jane28", 
  },
};

/** This is the dark version of the **Navbar** component:*/
export const NavbarDark = {
  args: {
    imageUrl: "../../../../../assets/profile2.png", 
    username: "Jane Doe", 
    account: "@jane28", 
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
