import MoreDropdownItemAds from './MoreDropdownItemAds';

/** The **MoreDropdownItemAds** component renders a dropdown's item called Topics. When this element is clicked, it triggers a custom function.*/
export default {
  title: 'patterns/Navbar/MoreDropdown/MoreDropdownItemAds',
  component: MoreDropdownItemAds,
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

/** This is the Light version of the **MoreDropdownItemAds** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the Dark version of the **MoreDropdownItemAds** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
};