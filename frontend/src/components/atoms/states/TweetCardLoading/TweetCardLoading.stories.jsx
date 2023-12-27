import TweetCardLoading from './TweetCardLoading'

/** The **TweetCardLoading** component renders the TweetCardLoading component. */
export default {
  title: 'atoms/States/TweetCardLoading',
  component: TweetCardLoading,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Defines the theme of the component.',
      control: 'boolean',
    },
  }
}

/** This is light version of **TweetCardLoading** component. */
export const Light = {
  args: {
    isDarkTheme: false
  }
}

/** This is dark version of **TweetCardLoading** component. */
export const Dark = {
  args: {
    isDarkTheme: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
