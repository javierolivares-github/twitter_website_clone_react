import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import SectionWrapper from '../../../atoms/wrappers/SectionWrapper';
import Heading1 from '../../../atoms/headings/Heading1';
import NewsFeedList from '../NewsFeedList';
import { statusTypes } from '../../../../data/statusTypes';


const NewsFeed = ({ isDarkTheme }) => {
  const [newsFeedState, setNewsFeedState] = useState({
    data: [],
    status: statusTypes.loading,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const newsFetch = await fetch('/api/news');
        const newsResponse = await newsFetch.json();
        setNewsFeedState({
          data: newsResponse.data,
          status: statusTypes.loaded,
        });
      } catch (error) {
        console.log(error);
        setNewsFeedState({
          data: [],
          status: statusTypes.error,
        })
      }
    }

    getData();
  }, []);

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

      <NewsFeedList 
        status={newsFeedState.status}
        data={newsFeedState.data}
        isDarkTheme={isDarkTheme}
      />

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