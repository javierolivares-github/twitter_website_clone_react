import React from 'react';
import WhoToFollowImage from '../../atoms/images/WhoToFollowImage';
import Icon from '../../atoms/icons/Icon';
import TweetButton from '../../atoms/buttons/TweetButton';
import Heading3 from '../../atoms/headings/Heading3';


const WhoToFollowItem = ({ username, account, isDarkTheme, imageUrl }) => {
  return (
    <div 
      className={`rounded-2xl overflow-hidden flex justify-start items-center gap-2 
      p-4 ${isDarkTheme ? 'bg-transparent-10 hover:bg-transparent-25' : 'bg-secondary-98 hover:bg-secondary-95'}`}
    >
      {/* Image */}
      <div className='w-[48px] h-[48px] rounded-full overflow-hidden'>
        <WhoToFollowImage/>
      </div>

      {/* Text */}
      <div className='flex flex-col flex-grow'>
        <div className='flex justify-start items-center gap-2'>
          {/* Text: username */}
          <Heading3 weight="font-bold" color={isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}>{username ? username : 'First name'}</Heading3>

          {/* Icon */}
          <Icon iconName="official" fillColor={isDarkTheme ? 'fill-current text-primary-70' : 'fill-current text-primary-50'} />
        </div>

        {/* Text: account */}
        <span 
          className={`font-normal text-[0.875rem] leading-[0.875rem] tracking-[0.25px]
          ${isDarkTheme ? 'text-secondary-95' : 'text-secondary-50'}`}
        >
          {account ? account : '@username'}
        </span>
      </div>

      {/* Button */}
      <TweetButton size="default" isDarkTheme={isDarkTheme}>Seguir</TweetButton>
    </div>
  )
};


export default WhoToFollowItem;