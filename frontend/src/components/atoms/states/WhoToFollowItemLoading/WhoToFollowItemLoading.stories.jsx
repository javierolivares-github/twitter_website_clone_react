import WhoToFollowItemLoading from './WhoToFollowItemLoading'

/** The **WhoToFollowItemLoading** component renders the WhoToFollowItemLoading component. */
export default {
  title: 'atoms/States/WhoToFollowItemLoading',
  component: WhoToFollowItemLoading,
  tags: ['autodocs'],
  argTypes: {
    isDarkTheme: {
      description: 'Defines the theme of the component.',
      control: 'boolean',
    },
  }
}

/** This is light version of **WhoToFollowItemLoading** component. */
export const Light = {
  args: {
    isDarkTheme: false
  }
}

/** This is dark version of **WhoToFollowItemLoading** component. */
export const Dark = {
  args: {
    isDarkTheme: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
