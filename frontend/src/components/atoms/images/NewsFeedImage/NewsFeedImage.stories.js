import NewsFeedImage from './NewsFeedImage';

/** The **NewsFeedImage** component renders an image for the News Feed section. */
export default {
  title: 'atoms/Images/NewsFeedImage',
  component: NewsFeedImage,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'Specifies the path to the image.',
      control: 'text',
    },
  },
};

/** This is the default version of the **NewsFeedImage** component:*/
export const Default = {
  args: {
    imageUrl: "../../../../../assets/virtualBoy.jpg",
  },
};
