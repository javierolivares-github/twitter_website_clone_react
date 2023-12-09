import React from 'react';
import NewsFeedImage from '../../atoms/images/NewsFeedImage';
import Heading3 from '../../atoms/headings/Heading3';
import Text from '../../atoms/texts/Text';

const NewsFeedItem = ({ username, timestamp, content, hashtag, imageUrl, isDarkTheme }) => {
  return (
    <div 
      className={`rounded-2xl flex items-center gap-2 
      p-4 ${isDarkTheme ? 'bg-transparent-10 hover:bg-transparent-25' : 'bg-secondary-98 hover:bg-secondary-95'}`}
    >
      {/* Text */}
      <div className='flex flex-col flex-grow gap-2'>
        <div className='flex items-center flex-grow gap-2'>

          <Heading3 weight="font-bold" color={isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}>{username ? username : 'First name'}</Heading3>

          <Text weight="font-normal" color={isDarkTheme ? 'text-secondary-95' : 'text-secondary-50'}>{timestamp ? timestamp : '5h ago'}</Text>
          
        </div>

        {/* Text: content */}
        <div 
          className={`flex flex-grow font-medium text-[0.875rem] 
          leading-[1rem] tracking-normal ${isDarkTheme ? 'text-secondary-95' : 'text-secondary-40'}`}
        >
          {content ? content : 'Placeholder content goes here!'}
        </div>

        
        <div className='flex gap-2'>
          {/* Text: Trending */}
          <span 
            className={`font-normal text-[0.875rem] leading-[0.875rem] 
            tracking-[0.25px] ${isDarkTheme ? 'text-secondary-95' : 'text-secondary-50'}`}
          >
            Trending
          </span>

          {/* Text: hashtag */}
          <span
            className={`font-normal text-[0.875rem] leading-[0.875rem] 
            tracking-[0.25px] ${isDarkTheme ? 'text-primary-70' : 'text-primary-50'}`}
          >
            {hashtag ? hashtag : '#hashtag'}
          </span>
        </div>
      </div>

      {/* Image */}
      <div className='w-[72px] h-[72px] rounded-2xl overflow-hidden'>
        <NewsFeedImage />
      </div>
      
    </div>
  )
};


export default NewsFeedItem;
