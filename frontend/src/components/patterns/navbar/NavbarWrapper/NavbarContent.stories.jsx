import NavbarWrapper from './NavbarWrapper';

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
    isActive: {
      description: 'Specifies whether the component is active or not. When it is active, it has an active CSS style. When it is not, it has a default CSS style.',
      control: 'boolean',
    },
  },
};

/** This is the light default version of the **NavbarWrapper** component:*/
export const LightDefault = {
  args: {
    isDarkTheme: false,
    isActive: false,
  },
};

/** This is the light active version of the **NavbarWrapper** component:*/
export const LightActive = {
  args: {
    isDarkTheme: false,
    isActive: true,
  },
};

/** This is the dark default version of the **NavbarWrapper** component:*/
export const DarkDefault = {
  args: {
    isDarkTheme: true,
    isActive: false,
  },
};

/** This is the dark active version of the **NavbarWrapper** component:*/
export const DarkActive = {
  args: {
    isDarkTheme: true,
    isActive: true,
  },
};