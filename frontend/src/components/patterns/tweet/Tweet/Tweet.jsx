import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import SectionWrapper from '../../../atoms/wrappers/SectionWrapper';
import { statusTypes } from '../../../../data/statusTypes';
import TweetList from '../TweetList/TweetList';

const Tweet = ({ isDarkTheme }) => {
  const [tweetState, setTweetState] = useState({
    data: [],
    status: statusTypes.loading,
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const tweetFetch = await fetch('/api/tweets');
        const tweetResponse = await tweetFetch.json();
        setTweetState({
          data: tweetResponse.data,
          status: statusTypes.loaded,
        });
      } catch (error) {
        console.log(error);
        setTweetState({
          data: [],
          status: statusTypes.error,
        })
      }
    }

    getData();
  }, [])

  return (
    <TweetList 
      status={tweetState.status} 
      data={tweetState.data} 
      isDarkTheme={isDarkTheme}
    />
  )
}

export default Tweet

Tweet.propTypes = {
  isDarkTheme: PropTypes.bool,
}