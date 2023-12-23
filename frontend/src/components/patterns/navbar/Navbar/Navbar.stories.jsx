import Navbar from './Navbar';
import { mockServer } from './mockServer';
mockServer();

/** The **Navbar** component renders a navbar menu. */
export default {
  title: 'patterns/Navbar/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
  },
};

/** This is the light version of the **Navbar** component:*/
export const NavbarLight = {
  args: {
  },
};

/** This is the dark version of the **Navbar** component:*/
export const NavbarDark = {
  args: {
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
