import TweetListLoading from './TweetListLoading'

/** The **TweetListLoading** component renders the TweetListLoading component. */
export default {
  title: 'patterns/Tweet/TweetListLoading',
  component: TweetListLoading,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Defines the theme of the component.',
      control: 'boolean',
    },
  }
}

/** This is light version of **TweetListLoading** component. */
export const Light = {
  args: {
    isDarkTheme: false
  }
}

/** This is dark version of **TweetListLoading** component. */
export const Dark = {
  args: {
    isDarkTheme: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
