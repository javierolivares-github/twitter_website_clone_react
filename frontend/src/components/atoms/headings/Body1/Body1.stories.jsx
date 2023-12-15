import Body1 from './Body1';

/** The **Body1** component is used for render level 1 text. */
export default {
  title: 'atoms/Typography/Body1',
  component: Body1,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the text.',
      control: 'text',
    },
    color: {
      description: 'Specifies the text-color of the heading. It must be a CSS class or a TailwindCSS class.',
      control: 'text',
    },
    weight: {
      description: 'Specifies the font weight of the text. It must be one of these:',
      control: 'text',
    },
  },
};

/** This is the bold version of the **Body1** component:*/
export const Bold = {
  args: {
    children: 'This is a Body1 bold component!',
    color: "text-secondary-15",
    weight: 'font-bold',
  },
};

/** This is the semibold version of the **Body1** component.*/
export const SemiBold = {
  args: {
    children: 'This is a Body1 semibold component!',
    color: "text-secondary-15",
    weight: 'font-semibold',
  },
};

/** This is the medium version of the **Body1** component.*/
export const Medium = {
  args: {
    children: 'This is a Body1 medium component!',
    color: "text-secondary-15",
    weight: 'font-medium',
  },
};

/** This is the regular version of the **Body1** component.*/
export const Regular = {
  args: {
    children: 'This is a Body1 regular component!',
    color: "text-secondary-15",
    weight: 'font-normal',
  },
};

/** This is the light version of the **Body1** component.*/
export const Light = {
  args: {
    children: 'This is a Body1 light component!',
    color: "text-secondary-15",
    weight: 'font-light',
  },
};