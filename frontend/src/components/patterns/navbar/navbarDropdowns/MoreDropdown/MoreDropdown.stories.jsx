import MoreDropdown from './MoreDropdown';

/** The **MoreDropdown** component renders a dropdown menu.*/
export default {
  title: 'patterns/Navbar/MoreDropdown/MoreDropdown',
  component: MoreDropdown,
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

/** This is the Light version of the **MoreDropdown** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the Dark version of the **MoreDropdown** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
};