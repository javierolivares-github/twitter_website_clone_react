import ProfileDropdownItemLogOut from './ProfileDropdownItemLogOut';

/** The **ProfileDropdownItemLogOut** component renders a profile dropdown's item. When the component is hovered over, it changes to its hover style. Clicking on the component activates a function, which its passed via props. */
export default {
  title: 'patterns/Navbar/ProfileDropdown/ProfileDropdownItemLogOut',
  component: ProfileDropdownItemLogOut,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
    },
    account: {
      description: 'Specifies the account of the user.',
      control: 'text',
    },
    onClick: {
      description: 'Event. When the component is clicked, fires a function.',
    },
  },
};

/** This is the light version of the **ProfileDropdownItemLogOut** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
    account: "@account",
  },
};

/** This is the dark version of the **ProfileDropdownItemLogOut** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
    account: "@account",
  },
};
