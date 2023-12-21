import HomeHeader from './HomeHeader';

/** The **HomeHeader** component displays the Header of the Home page. */
export default {
  title: 'patterns/Headers/HomeHeader',
  component: HomeHeader,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Specifies the style of the button. If isDarkTheme is true, renders a dark version of the button. If is false, renders a light version of the button.',
      control: 'boolean',
    },
  },
};

/** This is the light version of the **HomeHeader** component:*/
export const Light = {
  args: {
    isDarkTheme: false,
  },
};

/** This is the dark version of the **HomeHeader** component:*/
export const Dark = {
  args: {
    isDarkTheme: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};