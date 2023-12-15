import Body2 from './Body2';

/** The **Body2** component is used for render level 2 text. */
export default {
  title: 'atoms/Typography/Body2',
  component: Body2,
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

/** This is the bold version of the **Body2** component:*/
export const Bold = {
  args: {
    children: 'This is a Body2 bold component!',
    color: "text-secondary-15",
    weight: 'font-bold',
  },
};

/** This is the semibold version of the **Body2** component.*/
export const SemiBold = {
  args: {
    children: 'This is a Body2 semibold component!',
    color: "text-secondary-15",
    weight: 'font-semibold',
  },
};

/** This is the medium version of the **Body2** component.*/
export const Medium = {
  args: {
    children: 'This is a Body2 medium component!',
    color: "text-secondary-15",
    weight: 'font-medium',
  },
};

/** This is the regular version of the **Body2** component.*/
export const Regular = {
  args: {
    children: 'This is a Body2 regular component!',
    color: "text-secondary-15",
    weight: 'font-normal',
  },
};

/** This is the light version of the **Body2** component.*/
export const Light = {
  args: {
    children: 'This is a Body2 light component!',
    color: "text-secondary-15",
    weight: 'font-light',
  },
};