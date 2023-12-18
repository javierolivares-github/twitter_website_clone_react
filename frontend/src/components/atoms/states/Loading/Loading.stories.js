import Loading from './Loading'

/** The **Loading** component renders a custom loading message. */
export default {
  title: 'atoms/States/Loading',
  component: Loading,
  tags: ['autodocs'],
  argsTypes: {
    message: 'Specifies a custom Loading message.',
    control: 'text',
  }
}

/** This is de default version of **Loading** component. */
export const Default = {
  args: {
    message: "Loading..."
  }
}