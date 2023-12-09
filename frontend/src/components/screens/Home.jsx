import React, {useContext} from 'react';
import { Context } from '../../utilities/Context';
import ScreenWrapper from '../atoms/wrappers/ScreenWrapper';
import VerticalBorder from '../atoms/borders/VerticalBorder';
import MainWrapper from '../atoms/wrappers/MainWrapper';
import AsideWrapper from '../atoms/wrappers/AsideWrapper';
import NewsFeed from '../patterns/newsFeed/NewsFeed';
import WhoToFollow from '../patterns/whoToFollow/WhoToFollow';


const Home = () => {
  const { isDarkTheme } = useContext(Context);

  return (
    <ScreenWrapper>
      {/* VBorder */}
      <VerticalBorder isDarkTheme={isDarkTheme}/>

      <MainWrapper>
        The Home main section goes!
      </MainWrapper>
      
      {/* VBorder */}
      <VerticalBorder isDarkTheme={isDarkTheme}/>

      <AsideWrapper>
        <NewsFeed isDarkTheme={isDarkTheme}/>
        <WhoToFollow isDarkTheme={isDarkTheme}/>
      </AsideWrapper>

    </ScreenWrapper>
  )
};


export default Home;