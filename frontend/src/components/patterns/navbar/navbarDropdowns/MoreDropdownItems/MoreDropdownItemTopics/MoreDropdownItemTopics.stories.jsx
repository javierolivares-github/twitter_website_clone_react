import MoreDropdownItemTopics from './MoreDropdownItemTopics';

/** The **MoreDropdownItemTopics** component renders a dropdown's item called Topics. When this element is clicked, it triggers a custom function.*/
export default {
  title: 'patterns/Navbar/MoreDropdown/MoreDropdownItemTopics',
  component: MoreDropdownItemTopics,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component.',
      control: 'boolean',
    },
    onClick: {
      description: 'Event. When the element is clicked, fires a custom function.',
    },
  },
};

/** This is the Light version of the **MoreDropdownItemTopics** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the Dark version of the **MoreDropdownItemTopics** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
};