import SectionWrapper from './SectionWrapper';

/** The **SectionWrapper** component is used to wrap other components, applying a flexbox column style. */
export default {
  title: 'atoms/Wrappers/SectionWrapper',
  component: SectionWrapper,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the children of the component. It can be any.',
    },
  },
};

/** This is the default version of the **SectionWrapper** component:*/
export const Default = {
  args: {
    children: "This is the Section Wrapper component!",
  },
};

