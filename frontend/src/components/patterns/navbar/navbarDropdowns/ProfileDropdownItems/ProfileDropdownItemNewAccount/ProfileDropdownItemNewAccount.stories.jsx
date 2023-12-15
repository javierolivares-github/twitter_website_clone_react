import ProfileDropdownItemNewAccount from './ProfileDropdownItemNewAccount';

/** The **ProfileDropdownItemNewAccount** component renders a profile dropdown's item. When the component is hovered over, it changes to its hover style. Clicking on the component activates a function, which its passed via props. */
export default {
  title: 'patterns/Navbar/ProfileDropdown/ProfileDropdownItemNewAccount',
  component: ProfileDropdownItemNewAccount,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
    },
    onClick: {
      description: 'Event. When the component is clicked, fires a function.',
    },
  },
};

/** This is the light version of the **ProfileDropdownItemNewAccount** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the dark version of the **ProfileDropdownItemNewAccount** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
};
