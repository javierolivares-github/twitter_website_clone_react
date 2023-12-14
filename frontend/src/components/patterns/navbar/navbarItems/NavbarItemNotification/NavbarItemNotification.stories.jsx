import NavbarItemNotification from './NavbarItemNotification';

/** The **NavbarItemNotification** component renders a navbar's item. When the component is hovered over, it changes to its hover style. Clicking on the component activates a function, which its passed via props. */
export default {
  title: 'patterns/Navbar/NavbarItems/NavbarItemNotification',
  component: NavbarItemNotification,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
    },
    isHomeActive: {
      description: 'Specifies whether the component is active or not. When it is active, it has an active CSS style. When it is not, it has a default CSS style.',
      control: 'boolean',
    },
    onClick: {
      description: 'Event. When the component is clicked, fires a function.',
    },
  },
};

/** This is the light default version of the **NavbarItemNotification** component:*/
export const LightDefault = {
  args: {
    isDarkTheme: false,
    isHomeActive: false,
  },
};

/** This is the light active version of the **NavbarItemNotification** component:*/
export const LightActive = {
  args: {
    isDarkTheme: false,
    isHomeActive: true,
  },
};

/** This is the dark default version of the **NavbarItemNotification** component:*/
export const DarkDefault = {
  args: {
    isDarkTheme: true,
    isHomeActive: false,
  },
};

/** This is the dark active version of the **NavbarItemNotification** component:*/
export const DarkActive = {
  args: {
    isDarkTheme: true,
    isHomeActive: true,
  },
};