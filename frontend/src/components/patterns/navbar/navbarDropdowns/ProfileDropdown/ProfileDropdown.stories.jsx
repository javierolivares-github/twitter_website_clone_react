import ProfileDropdown from './ProfileDropdown'
import {profile} from '../../../../../data/profile'

/** The **ProfileDropdown** component renders a profile's dropdown. */
export default {
  title: 'patterns/Navbar/ProfileDropdown/ProfileDropdown',
  component: ProfileDropdown,
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
      description: 'Specifies the style of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
    },
    onClickNewAcc: {
      description: 'Event. When the button is clicked, fires the custom function 1.',
    },
    onClickLogOut: {
      description: 'Event. When the button is clicked, fires the custom function 2.',
    },
  },
};

/** This is the loaded light version of the **ProfileDropdown** component:*/
export const LoadedLight = {
  args: {
    status: "loaded",
    data: profile,
    isDarkTheme: false,
  },
};

/** This is the loading light version of the **ProfileDropdown** component:*/
export const LoadingLight = {
  args: {
    status: "loading",
    data: [],
    isDarkTheme: false,
  },
};

/** This is the error light version of the **ProfileDropdown** component:*/
export const ErrorLight = {
  args: {
    status: "error",
    data: [],
    isDarkTheme: false,
  },
};

/** This is the loaded dark version of the **ProfileDropdown** component:*/
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

/** This is the loading dark version of the **ProfileDropdown** component:*/
export const LoadingDark = {
  args: {
    status: "loading",
    data: [],
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
/** This is the Error dark version of the **ProfileDropdown** component:*/
export const ErrorDark = {
  args: {
    status: "error",
    data: [],
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

