import MoreDropdownItemSpaces from './MoreDropdownItemSpaces';

/** The **MoreDropdownItemSpaces** component renders a dropdown's item called Spaces. When this element is clicked, it triggers a custom function.*/
export default {
  title: 'patterns/Navbar/MoreDropdown/MoreDropdownItemSpaces',
  component: MoreDropdownItemSpaces,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component.',
      control: 'boolean',
    },
  },
};

/** This is the Light version of the **MoreDropdownItemSpaces** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the Dark version of the **MoreDropdownItemSpaces** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
};