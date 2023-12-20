import ProfileDropdownHeader from './ProfileDropdownHeader';

/** The **ProfileDropdownHeader** component renders a dropdown header. */
export default {
  title: 'patterns/Navbar/ProfileDropdown/ProfileDropdownHeader',
  component: ProfileDropdownHeader,
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
  },
};

/** This is the light version of the **ProfileDropdownHeader** component:*/
export const Light = {
  args: {
    imageUrl: "../../../../../assets/profile2.png",
    username: "Jane Doe",
    account: "@janedoe32",
    isDarkTheme: false,
  },
};

/** This is the dark version of the **ProfileDropdownHeader** component:*/
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

