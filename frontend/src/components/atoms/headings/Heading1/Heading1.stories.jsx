import Heading1 from './Heading1';

/** The **Heading1** component is used for render heading level 1. */
export default {
  title: 'atoms/Heading1',
  component: Heading1,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the heading.',
      control: 'text',
    },
    isDarkTheme: {
      description: 'Specifies the text color of the heading. If is true, the text color is text-gray-100. If is false, the text color is text-secondary-15',
      control: 'boolean',
    },
    weight: {
      description: 'Specifies the font weight of the heading. It must be one of these:',
      control: 'text',
    },
  },
};

/** This is the bold version of the **Heading1** component:*/
export const Bold = {
  args: {
    children: 'This is a Heading1 bold component!',
    isDarkTheme: false,
    weight: 'font-bold',
  },
};

/** This is the semibold version of the **Heading1** component.*/
export const SemiBold = {
  args: {
    children: 'This is a Heading1 bold component!',
    isDarkTheme: false,
    weight: 'font-semibold',
  },
};

/** This is the medium version of the **Heading1** component.*/
export const Medium = {
  args: {
    children: 'This is a Heading1 bold component!',
    isDarkTheme: false,
    weight: 'font-medium',
  },
};

/** This is the regular version of the **Heading1** component.*/
export const Regular = {
  args: {
    children: 'This is a Heading1 regular component!',
    isDarkTheme: false,
    weight: 'font-normal',
  },
};

/** This is the light version of the **Heading1** component.*/
export const Light = {
  args: {
    children: 'This is a Heading1 regular component!',
    isDarkTheme: false,
    weight: 'font-light',
  },
};

