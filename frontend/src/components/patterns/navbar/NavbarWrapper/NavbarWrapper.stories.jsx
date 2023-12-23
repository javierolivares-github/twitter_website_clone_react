import NavbarWrapper from './NavbarWrapper';
import {profile} from '../../../../data/profile'

/** The **NavbarWrapper** component renders a navbar's content. When the component is hovered over, it changes to its hover style. Clicking on the component activates a function, which its passed via props. */
export default {
  title: 'patterns/Navbar/NavbarWrapper',
  component: NavbarWrapper,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
    },
    onClickMoon: {
      description: 'Event. When the button Moon is clicked, fires a function.',
    },
    onClickTweet: {
      description: 'Event. When the button Tweet is clicked, fires a function.',
    },
    onClickProfile: {
      description: 'Event. When the button Profile is clicked, fires a function that shows the profile dropdown.',
    },
    onClickMore: {
      description: 'Event. When the button More is clicked, fires a function that shows the more dropdown.',
    },
    status: {
      description: 'Defines the state of the data.',
      control: "select",
      options: ["loading", "error", "loaded"],
    },
    data: {
      description: 'Receive data.',
      control: "object",
    },
  },
};

/** This is the loaded light version of the **NavbarWrapper** component:*/
export const LoadedLight = {
  args: {
    isDarkTheme: false, 
    status: "loaded",
    data: profile,
  },
};

/** This is the loading light version of the **NavbarWrapper** component:*/
export const LoadingLight = {
  args: {
    isDarkTheme: false, 
    status: "loading",
    data: [],
  },
};

/** This is the error light version of the **NavbarWrapper** component:*/
export const ErrorLight = {
  args: {
    isDarkTheme: false, 
    status: "error",
    data: [],
  },
};

/** This is the loaded dark version of the **NavbarWrapper** component:*/
export const LoadedDark = {
  args: {
    isDarkTheme: true, 
    state: "loaded",
    data: profile,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the loading dark version of the **NavbarWrapper** component:*/
export const LoadingDark = {
  args: {
    isDarkTheme: true, 
    status: "loading",
    data: [],
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the error dark version of the **NavbarWrapper** component:*/
export const ErrorDark = {
  args: {
    isDarkTheme: true, 
    status: "error",
    data: [],
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
