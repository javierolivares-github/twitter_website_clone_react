import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import ProfileImage from '../../../atoms/images/ProfileImage';
import MenuIcon from '../../../atoms/icons/MenuIcon';
import Heading2 from '../../../atoms/headings/Heading2';
import Body2 from '../../../atoms/headings/Body2';
import { statusTypes } from '../../../../data/statusTypes'
import ProfileLoading from '../../../atoms/states/ProfileLoading'
import Error from '../../../atoms/states/Error'

const NavbarProfile = ({ status, data, isDarkTheme, onClick }) => {
  if (status === statusTypes.loading) {
    return <ProfileLoading isDarkTheme={isDarkTheme}/>
  }

  if (status === statusTypes.error) {
    return <Error color={isDarkTheme ? "text-gray-100" : "text-red-600"} message={`Error, something went wrong with the profile data.`}/>
  }

  return (
    <div
      data-testid="navbar-profile-item"
      className={`rounded-full inline-flex items-center gap-4 p-4 cursor-pointer transition-all duration-200 ease-in-out
      ${!isDarkTheme && "hover:bg-primary-98"} 
      ${isDarkTheme && "hover:bg-transparent-10"}
      `} 
      onClick={onClick}
    >
      {/* Image */}
      <div className='w-10 h-10'>
        <ProfileImage imageUrl={data[0]?.imageUrl}/>
      </div>

      {/* Text */}
      <div className='flex flex-col flex-wrap gap-1'>
        {/* text: username */}
        <Heading2 weight="font-bold" color={isDarkTheme ? "text-gray-100" : "text-secondary-25"} >
          {data[0]?.username}
        </Heading2>

        {/* text: account */}
        <Body2 weight="font-normal" color={isDarkTheme ? "text-gray-100" : "text-secondary-40"} >
          {data[0]?.account}
        </Body2>
      </div>
      
      {/* Icon */}
      <MenuIcon fill={isDarkTheme ? "#FFFFFF" : "#000000"} size="24" /> 
    </div>
  )
};

export default NavbarProfile;

NavbarProfile.propTypes = {
  status: PropTypes.oneOf(["loading", "error", "loaded"]).isRequired,
  data: PropTypes.array,
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

NavbarProfile.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}