import NewsFeedItemLoading from './NewsFeedItemLoading'

/** The **NewsFeedItemLoading** component renders the NewsFeedItemLoading component. */
export default {
  title: 'atoms/States/NewsFeedItemLoading',
  component: NewsFeedItemLoading,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Defines the theme of the component.',
      control: 'boolean',
    },
  }
}

/** This is light version of **NewsFeedItemLoading** component. */
export const Light = {
  args: {
    isDarkTheme: false
  }
}

/** This is dark version of **NewsFeedItemLoading** component. */
export const Dark = {
  args: {
    isDarkTheme: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
