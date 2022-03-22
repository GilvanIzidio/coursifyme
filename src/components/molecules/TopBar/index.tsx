import React from 'react';
import { Image } from 'react-native';
import logo from '../../../assets/logo.png';
import ButtonCircleWithIcon from '../../atoms/ButtonCircleWithIcon';
import theme from '../../../styles/theme';
import { Container, Header } from './styles';

const TopBar = (): JSX.Element => {
  return (
    <Container style={theme.shadowStyle}>
      <Header>
        <Image source={logo} />
        <ButtonCircleWithIcon
          icon={{ name: 'menu', color: theme.colors.white }}
          backgroundColor={theme.colors.primary}
        />
      </Header>
    </Container>
  );
};

export default TopBar;
