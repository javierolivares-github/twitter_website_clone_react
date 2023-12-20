import NavbarItemBookmarks from './NavbarItemBookmarks';

/** The **NavbarItemBookmarks** component renders a navbar's item. When the component is hovered over, it changes to its hover style. Clicking on the component activates a function, which its passed via props. */
export default {
  title: 'patterns/Navbar/NavbarItems/NavbarItemBookmarks',
  component: NavbarItemBookmarks,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the component. If it is true, renders a dark version of the component. If it is false, renders a light version of the component.',
      control: 'boolean',
    },
    isActive: {
      description: 'Specifies whether the component is active or not. When it is active, it has an active CSS style. When it is not, it has a default CSS style.',
      control: 'boolean',
    },
  },
};

/** This is the light default version of the **NavbarItemBookmarks** component:*/
export const LightDefault = {
  args: {
    isDarkTheme: false,
    isActive: false,
  },
};

/** This is the light active version of the **NavbarItemBookmarks** component:*/
export const LightActive = {
  args: {
    isDarkTheme: false,
    isActive: true,
  },
};

/** This is the dark default version of the **NavbarItemBookmarks** component:*/
export const DarkDefault = {
  args: {
    isDarkTheme: true,
    isHomeActive: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the dark active version of the **NavbarItemBookmarks** component:*/
export const DarkActive = {
  args: {
    isDarkTheme: true,
    isHomeActive: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};