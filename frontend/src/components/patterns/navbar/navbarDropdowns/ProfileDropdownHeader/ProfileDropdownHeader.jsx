import React from 'react'
import PropTypes from 'prop-types'
import ProfileImage from '../../../../atoms/images/ProfileImage'
import Heading2 from '../../../../atoms/headings/Heading2'
import Body2 from '../../../../atoms/headings/Body2'
import CheckIcon from '../../../../atoms/icons/CheckIcon'
import Loading from '../../../../atoms/states/Loading'
import Error from '../../../../atoms/states/Error'
import {statusTypes} from '../../../../../data/statusTypes'

const ProfileDropdownHeader = ({ status, data, isDarkTheme }) => {
  if (status === statusTypes.loading) {
    return (
      <div className='p-4'>
        <Loading color={isDarkTheme ? "text-gray-100" : "text-blue-600"} message={`Loading profile data...`}/>
      </div>
    )
  }

  if (status === statusTypes.error) {
    return (
      <div className='p-4'>
        <Error color={isDarkTheme ? "text-gray-100" : "text-red-600"} message={`Error, something went wrong with the profile data.`}/>
      </div>
    )
  }

  return (
    <div
      data-testid="profiledrop-header"
      className={`flex items-center gap-4 p-4 transition-all duration-200 ease-in-out max-w-[320px]`}
    >
      
      {/* Image */}
      <div className="w-10 h-10">
        <ProfileImage imageUrl={data[0].imageUrl}/>
      </div>
      
      {/* Texts */}
      <div className={`flex-grow flex flex-col gap-1 overflow-hidden`}>
        <Heading2 
          weight="font-bold" 
          color={isDarkTheme ? "text-gray-100" : "text-secondary-25"}
        >
          {data[0].username}
        </Heading2>
        <Body2
          weight="font-normal" 
          color={isDarkTheme ? "text-gray-100" : "text-secondary-40"}
        >
          {data[0].account}
        </Body2>
      </div>
      
      {/* Icon */}
      <CheckIcon 
        fill="#00BA18"
        size="24"
      />

    </div>
  )
};


export default ProfileDropdownHeader;

ProfileDropdownHeader.propTypes = {
  status: PropTypes.oneOf(["loading", "error", "loaded"]),
  data: PropTypes.array,
  isDarkTheme: PropTypes.bool,
};

ProfileDropdownHeader.defaultProps = {
  isDarkTheme: false,
}