import Error from './Error'

/** The **Error** component renders a custom error message. */
export default {
  title: 'atoms/States/Error',
  component: Error,
  tags: ['autodocs'],
  argsTypes: {
    message: 'Specifies a custom error message.',
    control: 'text',
  }
}

/** This is de default version of **Error** component. */
export const Default = {
  args: {
    message: "Oh no, something went wrong!"
  }
}