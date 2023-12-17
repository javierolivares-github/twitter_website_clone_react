import NewsFeedItem from './NewsFeedItem';

/** The **NewsFeedItem** component renders one item of the News Feed Section.*/
export default {
  title: 'patterns/NewsSidebar/NewsFeedItem',
  component: NewsFeedItem,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Specifies the title of the component.',
      control: 'text',
    },
    date: {
      description: 'Specifies the date of the component.',
      control: 'text',
    },
    content: {
      description: 'Specifies the content of the component.',
      control: 'text',
    },
    trending: {
      description: 'Specifies if it is trending or not.',
      control: 'text',
    },
    hashtag: {
      description: 'Specifies the hashtag of the component.',
      control: 'text',
    },
    imageUrl: {
      description: 'Specifies the path to the image',
      control: 'text',
    },
    isDarkTheme: {
      description: 'Specifies the theme of the component. If isDarkTheme is true, renders a Light version. If it is false, renders a Dark version.',
      control: 'text',
    },
  },
};

/** This is the light version of the **NewsFeedItem** component:*/
export const Light = {
  args: {
    title: "Virtual Boy",
    date: "56min ago",
    content: "🔮✨ Sumérgete en nuevos mundos y vive experiencias increíbles con la realidad virtual. ¡La tecnología que desafía los límites de la imaginación!",
    trending: "Trending",
    hashtag: "#Apple360 #virtualReality",
    imageUrl: "../../../../../assets/virtualBoy.jpg",
    isDarkTheme: false,
  },
};

/** This is the dark version of the **NewsFeedItem** component:*/
export const Dark = {
  args: {
    title: "Virtual Boy",
    date: "56min ago",
    content: "🔮✨ Sumérgete en nuevos mundos y vive experiencias increíbles con la realidad virtual. ¡La tecnología que desafía los límites de la imaginación!",
    trending: "Trending",
    hashtag: "#Apple360 #virtualReality",
    imageUrl: "../../../../../assets/virtualBoy.jpg",
    isDarkTheme: true,
  },
};
