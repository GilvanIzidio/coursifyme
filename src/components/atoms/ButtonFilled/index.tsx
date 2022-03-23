import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import theme, { typography } from '../../../styles/theme';
import Typograph from '../Typograph';
import { Container } from './styles';

type ButtonFilledProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

const ButtonFilled = ({ children, ...rest }: ButtonFilledProps): JSX.Element => {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Typograph family={typography.RobotoRegular} size={12} color={theme.colors.white}>
        {children}
      </Typograph>
    </Container>
  );
};

export default ButtonFilled;
