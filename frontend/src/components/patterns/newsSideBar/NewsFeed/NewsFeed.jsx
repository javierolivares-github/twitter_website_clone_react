import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import SectionWrapper from '../../../atoms/wrappers/SectionWrapper';
import Heading1 from '../../../atoms/headings/Heading1';


const NewsFeed = ({ isDarkTheme }) => {
  return (
    <SectionWrapper>
      <Heading1 
        weight={`font-bold`} 
        color={`
        ${isDarkTheme && "text-gray-100"}
        ${!isDarkTheme && "text-secondary-15"}
        `}
      >
        News Feed
      </Heading1>
    </SectionWrapper>
  )
};

export default NewsFeed;

NewsFeed.propTypes = {
  isDarkTheme: PropTypes.bool,
}

NewsFeed.defaultProps = {
  isDarkTheme: false,
}