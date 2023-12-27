import WhoToFollowListLoading from './WhoToFollowListLoading'

/** The **WhoToFollowListLoading** component renders the WhoToFollowListLoading component. */
export default {
  title: 'patterns/NewsSidebar/WhoToFollowListLoading',
  component: WhoToFollowListLoading,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Defines the theme of the component.',
      control: 'boolean',
    },
  }
}

/** This is light version of **WhoToFollowListLoading** component. */
export const Light = {
  args: {
    isDarkTheme: false
  }
}

/** This is dark version of **WhoToFollowListLoading** component. */
export const Dark = {
  args: {
    isDarkTheme: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
