import NavbarProfile from './NavbarProfile';
import { profile } from '../../../../data/profile';

/** The **NavbarProfile** component renders the Navbar Profile component. This component has three states: loading, error, and loaded. Loading display a custom loading component. Error display a custom error message. And Loaded allows data flow into, hidrating the component. */
export default {
  title: 'patterns/Navbar/NavbarProfile',
  component: NavbarProfile,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Defines the state of the data.',
      control: 'select',
      options: ["loading", "error", "loaded"],
    },
    data: {
      description: 'Recieve the data.',
      control: 'object',
    },
    isDarkTheme: {
      description: 'Specifies the style of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
    },
    onClick: {
      description: 'Event. When the component is clicked, it fires a function.',
      action: 'Button clicked. Fires a custom function.'
    },
  },
};

/** This is the loaded light version of the **NavbarProfile** component:*/
export const LoadedLight = {
  args: {
    status: "loaded",
    data: profile,
    isDarkTheme: false,
  },
};

/** This is the loading light version of the **NavbarProfile** component:*/
export const LoadingLight = {
  args: {
    status: "loading",
    data: profile,
    isDarkTheme: false,
  },
};

/** This is the error light version of the **NavbarProfile** component:*/
export const ErrorLight = {
  args: {
    status: "error",
    data: profile,
    isDarkTheme: false,
  },
};

/** This is the loaded dark version of the **NavbarProfile** component:*/
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

/** This is the loading dark version of the **NavbarProfile** component:*/
export const LoadingDark = {
  args: {
    status: "loading",
    data: profile,
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the error dark version of the **NavbarProfile** component:*/
export const ErrorDark = {
  args: {
    status: "error",
    data: profile,
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

