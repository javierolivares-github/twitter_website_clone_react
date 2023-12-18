import NewsFeedListItem from './NewsFeedListItem';

/** The **NewsFeedListItem** component renders one item of the News Feed Section.*/
export default {
  title: 'patterns/NewsSidebar/NewsFeedListItem',
  component: NewsFeedListItem,
  tags: ['autodocs'],
  argTypes: {
    username: {
      description: 'Specifies the username of the account.',
      control: 'text',
    },
    timestamp: {
      description: 'Specifies the date when the news was published.',
      control: 'text',
    },
    content: {
      description: 'Specifies the content of the news.',
      control: 'text',
    },
    trending: {
      description: 'Specifies if the news is trending or not. If it is, shows a Trending label.',
      control: 'boolean',
    },
    hashtag: {
      description: 'Specifies the hashtag o hashtags of the news.',
      control: 'text',
    },
    imageUrl: {
      description: 'Specifies the path to the image',
      control: 'text',
    },
    isDarkTheme: {
      description: 'Specifies the theme of the component. If isDarkTheme is true, renders a Light version. If it is false, renders a Dark version.',
      control: 'boolean',
    },
  },
};

/** This is the light version of the **NewsFeedListItem** component:*/
export const Light = {
  args: {
    username: "Virtual Boy",
    timestamp: "56min ago",
    content: "🔮✨ Sumérgete en nuevos mundos y vive experiencias increíbles con la realidad virtual. ¡La tecnología que desafía los límites de la imaginación!",
    trending: false,
    hashtag: "#Apple360 #virtualReality",
    imageUrl: "../../../../../assets/virtualBoy.jpg",
    isDarkTheme: false,
  },
};

/** This is the light trending version of the **NewsFeedListItem** component:*/
export const LightTrending = {
  args: {
    username: "Virtual Boy",
    timestamp: "56min ago",
    content: "🔮✨ Sumérgete en nuevos mundos y vive experiencias increíbles con la realidad virtual. ¡La tecnología que desafía los límites de la imaginación!",
    trending: true,
    hashtag: "#Apple360 #virtualReality",
    imageUrl: "../../../../../assets/virtualBoy.jpg",
    isDarkTheme: false,
  },
};

/** This is the dark version of the **NewsFeedListItem** component:*/
export const Dark = {
  args: {
    username: "Virtual Boy",
    timestamp: "56min ago",
    content: "🔮✨ Sumérgete en nuevos mundos y vive experiencias increíbles con la realidad virtual. ¡La tecnología que desafía los límites de la imaginación!",
    trending: false,
    hashtag: "#Apple360 #virtualReality",
    imageUrl: "../../../../../assets/virtualBoy.jpg",
    isDarkTheme: true,
  },
};

/** This is the dark treding version of the **NewsFeedListItem** component:*/
export const DarkTrending = {
  args: {
    username: "Virtual Boy",
    timestamp: "56min ago",
    content: "🔮✨ Sumérgete en nuevos mundos y vive experiencias increíbles con la realidad virtual. ¡La tecnología que desafía los límites de la imaginación!",
    trending: true,
    hashtag: "#Apple360 #virtualReality",
    imageUrl: "../../../../../assets/virtualBoy.jpg",
    isDarkTheme: true,
  },
};

