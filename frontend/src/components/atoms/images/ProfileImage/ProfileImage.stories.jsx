import ProfileImage from './ProfileImage';

/** The **ProfileImage** component renders a profile image. The image can be passed via props. */
export default {
  title: 'atoms/Images/ProfileImage',
  component: ProfileImage,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'Specifies the path to the image.',
      control: 'text',
    },
  },
};

/** This is the default version of the **ProfileImage** component:*/
export const Default = {
  args: {
    imageUrl: "../../../../../assets/profile3.png",
  },
};

