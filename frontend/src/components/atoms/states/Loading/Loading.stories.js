import Loading from './Loading'

/** The **Loading** component renders a custom loading message. */
export default {
  title: 'atoms/States/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    message: {
      description: 'Defines a custom loading message.',
      control: 'text',
    },
    color: {
      description: 'Defines a custom color for the loading message. It must be CSS or TailwindCSS classes.',
      control: 'text',
    },
  }
}

/** This is default version of **Loading** component. */
export const Default = {
  args: {
    message: "Loading...",
    color: "text-blue-700",
  }
}