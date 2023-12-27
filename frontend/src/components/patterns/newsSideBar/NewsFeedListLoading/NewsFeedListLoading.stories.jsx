import NewsFeedListLoading from './NewsFeedListLoading'

/** The **NewsFeedListLoading** component renders the NewsFeedListLoading component. */
export default {
  title: 'patterns/NewsSidebar/NewsFeedListLoading',
  component: NewsFeedListLoading,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Defines the theme of the component.',
      control: 'boolean',
    },
  }
}

/** This is light version of **NewsFeedListLoading** component. */
export const Light = {
  args: {
    isDarkTheme: false
  }
}

/** This is dark version of **NewsFeedListLoading** component. */
export const Dark = {
  args: {
    isDarkTheme: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
