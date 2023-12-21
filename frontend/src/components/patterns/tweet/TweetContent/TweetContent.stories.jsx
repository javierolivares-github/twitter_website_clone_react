import TweetContent from './TweetContent';

/** The **TweetContent** component displays the Tweet Content component. */
export default {
  title: 'patterns/Tweet/TweetContent',
  component: TweetContent,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      description: 'Defines the path to the image.',
      control: 'text',
    },
    content: {
      description: 'Defines the text content.',
      control: 'text',
    },
    isDarkTheme: {
      description: 'Specifies the theme of the component. If isDarkTheme is true, renders a dark version of the component. If is false, renders a light version of the component.',
      control: 'boolean',
    },
    hasImage: {
      description: 'Specifies if the component has image or not.',
      control: 'boolean',
    },
  },
};

/** This is the light default version of the **TweetContent** component:*/
export const LightDefault = {
  args: {
    content: "Placeholder content goes here!",
    isDarkTheme: false,
    hasImage: false,
  },
};

/** This is the light image version of the **TweetContent** component:*/
export const LightImage = {
  args: {
    imageUrl: "../../../../../assets/coffee.jpg",
    content: "Placeholder content goes here!",
    isDarkTheme: false,
    hasImage: true,
  },
};

/** This is the dark default version of the **TweetContent** component:*/
export const DarkDefault = {
  args: {
    content: "Placeholder content goes here!",
    isDarkTheme: true,
    hasImage: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/** This is the dark image version of the **TweetContent** component:*/
export const DarkImage = {
  args: {
    imageUrl: "../../../../../assets/coffee.jpg",
    content: "Placeholder content goes here!",
    isDarkTheme: true,
    hasImage: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

