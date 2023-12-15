import MoreDropdownItemDisplay from './MoreDropdownItemDisplay';

/** The **MoreDropdownItemDisplay** component renders a dropdown's item called Topics. When this element is clicked, it triggers a custom function.*/
export default {
  title: 'patterns/Navbar/MoreDropdown/MoreDropdownItemDisplay',
  component: MoreDropdownItemDisplay,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component.',
      control: 'boolean',
    },
  },
};

/** This is the Light version of the **MoreDropdownItemDisplay** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the Dark version of the **MoreDropdownItemDisplay** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
};