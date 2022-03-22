import React from 'react';
import Icon from '../Icon';
import { Container } from './styles';

type ButtonCircleWithIconProps = {
  icon: {
    name: string;
    color: string;
  };
  backgroundColor: string;
};

const ButtonCircleWithIcon = ({
  icon,
  backgroundColor,
}: ButtonCircleWithIconProps): JSX.Element => {
  return (
    <Container activeOpacity={0.8} color={backgroundColor}>
      <Icon name={icon.name} color={icon.color} size={30} />
    </Container>
  );
};

export default ButtonCircleWithIcon;
