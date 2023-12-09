import React from 'react';
import { IconData } from './IconData';

const Icon = ({ iconName, fillColor, isFilled, size }) => {
  const itemFiltered = () => {
    const icon = IconData.filter((item) => item.name === iconName);
    return icon[0].component(fillColor, isFilled, size);
  };

  return (
    itemFiltered()
  );
};


export default Icon;