import WhoToFollowImage from './WhoToFollowImage';

/** The **WhoToFollowImage** component renders an image for the Who to follow section. */
export default {
  title: 'atoms/Images/WhoToFollowImage',
  component: WhoToFollowImage,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'Specifies the path to the image.',
      control: 'text',
    },
  },
};

/** This is the default version of the **WhoToFollowImage** component:*/
export const Default = {
  args: {
    imageUrl: "../../../../../assets/profile2.png",
  },
};
