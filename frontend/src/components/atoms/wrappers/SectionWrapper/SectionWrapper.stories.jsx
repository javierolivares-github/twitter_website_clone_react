import SectionWrapper from './SectionWrapper';

/** The **SectionWrapper** component is used to wrap other components. This component apply a flexbox column style. */
export default {
  title: 'atoms/Wrappers/SectionWrapper',
  component: SectionWrapper,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Defines the children of the component.',
    },
  },
};

/** This is the default version of the **SectionWrapper** component:*/
export const Default = {
  args: {
    children: "This is the Section Wrapper component!",
  },
};

