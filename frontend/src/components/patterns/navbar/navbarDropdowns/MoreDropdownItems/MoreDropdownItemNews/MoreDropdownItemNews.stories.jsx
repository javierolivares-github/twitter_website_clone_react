import MoreDropdownItemNews from './MoreDropdownItemNews';

/** The **MoreDropdownItemNews** component renders a dropdown's item called News. When this element is clicked, it triggers a custom function.*/
export default {
  title: 'patterns/Navbar/MoreDropdown/MoreDropdownItemNews',
  component: MoreDropdownItemNews,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component.',
      control: 'boolean',
    },
    onClick: {
      description: 'Event. When the button is clicked, fires a custom function.',
    },
  },
};

/** This is the Light version of the **MoreDropdownItemNews** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the Dark version of the **MoreDropdownItemNews** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
};