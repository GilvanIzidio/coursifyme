import React from 'react';
import { TextProps } from 'react-native';
import { Text } from './styles';

interface TypographProps extends TextProps {
  family?: string;
  size?: number;
  color?: string;
  weight?: number;
  children: React.ReactNode;
}

const Typograph = ({
  family,
  size,
  color,
  children,
  weight,
  ...rest
}: TypographProps): JSX.Element => {
  return (
    <Text fontFamily={family} fontSize={size} color={color} weight={weight} {...rest}>
      {children}
    </Text>
  );
};

export default Typograph;
