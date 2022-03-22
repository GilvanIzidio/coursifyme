import React from 'react';
import IconsFeather from 'react-native-vector-icons/Feather';

type IconProps = {
  name: string;
  size: number;
  color: string;
};

const Icon = ({ name, size, color }: IconProps): JSX.Element => {
  return <IconsFeather name={name} size={size} color={color} />;
};

export default Icon;
