import MoreDropdownItemSettings from './MoreDropdownItemSettings';

/** The **MoreDropdownItemSettings** component renders a dropdown's item called Settings. When this element is clicked, it triggers a custom function.*/
export default {
  title: 'patterns/Navbar/MoreDropdown/MoreDropdownItemSettings',
  component: MoreDropdownItemSettings,
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

/** This is the Light version of the **MoreDropdownItemSettings** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the Dark version of the **MoreDropdownItemSettings** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};