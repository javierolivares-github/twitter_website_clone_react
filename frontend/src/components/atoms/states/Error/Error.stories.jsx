import Error from './Error'

/** The **Error** component renders a custom error message. */
export default {
  title: 'atoms/States/Error',
  component: Error,
  tags: ['autodocs'],
  argTypes: {
    message: {
      description: 'Defines a custom error message.',
      control: 'text',
    },
    color: {
      description: 'Defines a custom color for the error message. It must be CSS or TailwindCSS classes.',
      control: 'text',
    },
  }
}

/** This is default version of the **Error** component. */
export const Default = {
  args: {
    message: "Oh no, something went wrong!",
    color: "text-red-700"
  }
}
