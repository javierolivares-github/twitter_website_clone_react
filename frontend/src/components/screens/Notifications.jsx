import React, {useContext} from 'react';
import { Context } from '../../utilities/Context';
import ScreenWrapper from '../atoms/wrappers/ScreenWrapper';
import VerticalBorder from '../atoms/borders/VerticalBorder';
import MainWrapper from '../atoms/wrappers/MainWrapper';
import AsideWrapper from '../atoms/wrappers/AsideWrapper';
import NewsFeed from '../patterns/newsFeed/NewsFeed';
import WhoToFollow from '../patterns/whoToFollow/WhoToFollow';


const Notifications = () => {
  const { isDarkTheme } = useContext(Context);

  return (
    <ScreenWrapper>
      {/* VBorder */}
      <VerticalBorder isDarkTheme={isDarkTheme}/>

      <MainWrapper>
        The Notifications main section goes here!
      </MainWrapper>
      
      {/* VBorder */}
      <VerticalBorder isDarkTheme={isDarkTheme}/>

      <AsideWrapper>
        The Notifications aside section goes!
      </AsideWrapper>

    </ScreenWrapper>
  )
};


export default Notifications;