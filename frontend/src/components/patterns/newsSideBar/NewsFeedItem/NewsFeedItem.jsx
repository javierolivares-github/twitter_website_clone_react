import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import Heading2 from '../../../atoms/headings/Heading2';
import Body1 from '../../../atoms/headings/Body1';
import Body2 from '../../../atoms/headings/Body2';
import NewsFeedImage from '../../../atoms/images/NewsFeedImage';


const NewsFeedItem = ({ title, date, content, trending, hashtag, imageUrl, isDarkTheme }) => {
  return (
    // Container
    <div
      data-testid="newsfeeditem" 
      className={`
        max-w-[460px] w-full p-4 flex justify-start
        items-center gap-2 rounded-2xl overflow-hidden
        ${!isDarkTheme && "bg-secondary-98 hover:bg-secondary-95"}
        ${isDarkTheme && "bg-transparent-10 hover:bg-transparent-25"}
      `}
    >
        {/* Col1 */}
        <div className="w-full flex flex-col justify-start items-start gap-2">

          {/* Row1 Header */}
          <div className="w-full flex justify-start items-center gap-2">
            <Heading2 
              weight="font-bold" 
              color={`
                ${!isDarkTheme && "text-secondary-15"}
                ${isDarkTheme && "text-gray-100"}
              `}
            >
              {title}
            </Heading2>
            <Body2 
              weight="font-normal" 
              color={`
                ${!isDarkTheme && "text-secondary-50"}
                ${isDarkTheme && "text-secondary-95"}
              `}
            >
              {date}
            </Body2>
          </div>

          {/* Row2 Body */}
          <div className="w-full">
            <Body1 
              weight="font-medium" 
              color={`
                ${!isDarkTheme && "text-secondary-40"}
                ${isDarkTheme && "text-secondary-95"}
              `}
            >
              {content}
            </Body1>
          </div>

          {/* Row3 Footer */}
          <div className="w-full flex justify-start items-center gap-2">
            <Body2 
              weight="font-normal" 
              color={`
                ${!isDarkTheme && "text-secondary-50"}
                ${isDarkTheme && "text-secondary-95"}
              `}
            >
              {trending}
            </Body2>
            <Body2 
              weight="font-normal" 
              color={`
                ${!isDarkTheme && "text-primary-50"}
                ${isDarkTheme && "text-primary-70"}
              `}
            >
              {hashtag}
            </Body2>
          </div>

        </div>

        {/* Col2 */}
        <div>
          <NewsFeedImage imageUrl={imageUrl} />
        </div>
    </div>
  );
};

export default NewsFeedItem;

NewsFeedItem.propTypes = {
  title: PropTypes.string, 
  date: PropTypes.string, 
  content: PropTypes.string, 
  trending: PropTypes.string, 
  hashtag: PropTypes.string, 
  imageUrl: PropTypes.string,
};

NewsFeedItem.defaultProps = {
  title: "First Name", 
  date: "5h ago", 
  content: "Placeholder content goes here!", 
  trending: "Trending", 
  hashtag: "#hashtag", 
  imageUrl: "../../../../../assets/coffee.jpg",
}

