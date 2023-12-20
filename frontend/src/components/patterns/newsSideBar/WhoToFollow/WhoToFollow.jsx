import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import SectionWrapper from '../../../atoms/wrappers/SectionWrapper';
import Heading1 from '../../../atoms/headings/Heading1';
import WhoToFollowList from '../WhoToFollowList';
import { statusTypes } from '../../../../data/statusTypes';


const WhoToFollow = ({ isDarkTheme, onClick }) => {
  const [whoToFollowState, setWhoToFollowState] = useState({
    data: [],
    status: statusTypes.loading,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const followFetch = await fetch('/api/who-to-follow');
        const followResponse = await followFetch.json();
        setWhoToFollowState({
          data: followResponse.data,
          status: statusTypes.loaded,
        });
      } catch (error) {
        console.log(error);
        setWhoToFollowState({
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
        Who To Follow
      </Heading1>

      <WhoToFollowList 
        status={whoToFollowState.status}
        data={whoToFollowState.data}
        isDarkTheme={isDarkTheme}
        onClick={onClick}
      />

    </SectionWrapper>
  )
};

export default WhoToFollow;

WhoToFollow.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
}

WhoToFollow.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}