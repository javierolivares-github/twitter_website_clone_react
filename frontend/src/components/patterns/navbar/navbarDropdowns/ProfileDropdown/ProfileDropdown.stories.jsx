import ProfileDropdown from './ProfileDropdown';

/** The **ProfileDropdown** component renders a profile's dropdown. */
export default {
  title: 'patterns/Navbar/ProfileDropdown/ProfileDropdown',
  component: ProfileDropdown,
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
    onClickNewAcc: {
      description: 'Event. When the button is clicked, fires the custom function 1.',
    },
    onClickLogOut: {
      description: 'Event. When the button is clicked, fires the custom function 2.',
    },
  },
};

/** This is the light version of the **ProfileDropdown** component:*/
export const Light = {
  args: {
    imageUrl: "../../../../../assets/profile2.png",
    username: "Jane Doe",
    account: "@janedoe32",
    isDarkTheme: false,
  },
};

/** This is the dark version of the **ProfileDropdown** component:*/
export const Dark = {
  args: {
    imageUrl: "../../../../../assets/profile2.png",
    username: "Jane Doe",
    account: "@janedoe32",
    isDarkTheme: true,
  },
};

