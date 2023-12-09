import React from 'react';
import Heading2 from '../../atoms/headings/Heading2';
import WhoToFollowItem from './WhoToFollowItem';
import SectionWrapper from '../../atoms/wrappers/SectionWrapper';


const WhoToFollow = ({ isDarkTheme }) => {
  return (
    <SectionWrapper>
      <Heading2 weight="font-bold" color={isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}>A quién seguir</Heading2>
      <WhoToFollowItem isDarkTheme={isDarkTheme}/>
      <WhoToFollowItem isDarkTheme={isDarkTheme}/>
      <WhoToFollowItem isDarkTheme={isDarkTheme}/>
      <WhoToFollowItem isDarkTheme={isDarkTheme}/>
    </SectionWrapper>
  )
};


export default WhoToFollow;