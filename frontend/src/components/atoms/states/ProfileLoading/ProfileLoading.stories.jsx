import ProfileLoading from './ProfileLoading'

/** The **ProfileLoading** component renders the ProfileLoading component. */
export default {
  title: 'atoms/States/ProfileLoading',
  component: ProfileLoading,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Defines the theme of the component.',
      control: 'boolean',
    },
  }
}

/** This is light version of **ProfileLoading** component. */
export const Light = {
  args: {
    isDarkTheme: false
  }
}

/** This is dark version of **ProfileLoading** component. */
export const Dark = {
  args: {
    isDarkTheme: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
