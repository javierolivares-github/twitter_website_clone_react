import MoreDropdownItemAnalytics from './MoreDropdownItemAnalytics';

/** The **MoreDropdownItemAnalytics** component renders a dropdown's item called Topics. When this element is clicked, it triggers a custom function.*/
export default {
  title: 'patterns/Navbar/MoreDropdown/MoreDropdownItemAnalytics',
  component: MoreDropdownItemAnalytics,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component.',
      control: 'boolean',
    },
  },
};

/** This is the Light version of the **MoreDropdownItemAnalytics** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the Dark version of the **MoreDropdownItemAnalytics** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
};