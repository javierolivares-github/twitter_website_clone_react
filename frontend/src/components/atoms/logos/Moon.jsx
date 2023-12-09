import React, {useContext} from 'react';
import Icon from '../icons/Icon';
import { Context } from '../../../utilities/Context';


const Moon = () => {
  const {isDarkTheme, setisDarkTheme} = useContext(Context);

  const svgOutline = () => {
    return (
      <Icon 
        iconName="moon"
        fillColor='fill-current text-secondary-15'
        isFilled={false}
      />
    );
  };

  const svgFilled = () => {
    return (
      <Icon 
        iconName="moon" 
        fillColor='fill-current text-gray-100'
        isFilled={true}
      />
    );
  };

  const switchToggle = () => {
    setisDarkTheme(!isDarkTheme);
  }

  return (
    <div 
      className={`p-2 rounded-full ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'} inline-flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out`}
      onClick={switchToggle}
    >
      {isDarkTheme ? svgFilled() : svgOutline()}
    </div>
  )
};


export default Moon;