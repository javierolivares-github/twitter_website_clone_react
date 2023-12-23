import ProfileDropdownHeader from './ProfileDropdownHeader'
import {profile} from '../../../../../data/profile'

/** The **ProfileDropdownHeader** component renders a dropdown header. */
export default {
  title: 'patterns/Navbar/ProfileDropdown/ProfileDropdownHeader',
  component: ProfileDropdownHeader,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Defines the state of data',
      control: 'select',
      options: ["loading", "error", "loaded"]
    },
    data: {
      description: 'Receive data.',
      control: 'object',
    },
    isDarkTheme: {
      description: 'Defines the theme of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
    },
  },
}

/** This is the loaded light version of the **ProfileDropdownHeader** component:*/
export const LoadedLight = {
  args: {
    status: "loaded",
    data: profile,
    isDarkTheme: false,
  },
};

/** This is the loading light version of the **ProfileDropdownHeader** component:*/
export const LoadingLight = {
  args: {
    status: "loading",
    data: [],
    isDarkTheme: false,
  },
};

/** This is the error light version of the **ProfileDropdownHeader** component:*/
export const ErrorLight = {
  args: {
    status: "error",
    data: [],
    isDarkTheme: false,
  },
};

/** This is the loaded dark version of the **ProfileDropdownHeader** component:*/
export const LoadedDark = {
  args: {
    status: "loaded",
    data: profile,
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

