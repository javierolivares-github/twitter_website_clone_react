import React from 'react';
import SectionWrapper from '../../atoms/wrappers/SectionWrapper';
import Heading2 from '../../atoms/headings/Heading2';
import NewsFeedItem from './NewsFeedItem';


const NewsFeed = ({ isDarkTheme }) => {
  return (
    <SectionWrapper>
      <Heading2 weight="font-bold" color={isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}>Noticias</Heading2>
      <NewsFeedItem isDarkTheme={isDarkTheme}/>
      <NewsFeedItem isDarkTheme={isDarkTheme}/>
      <NewsFeedItem isDarkTheme={isDarkTheme}/>
      <NewsFeedItem isDarkTheme={isDarkTheme}/>
    </SectionWrapper>
  )
};

export default NewsFeed;