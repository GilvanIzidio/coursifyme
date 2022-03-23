import React from 'react';
import { Image } from 'react-native';
import logoWhite from '../../../assets/logoWhite.png';
import theme, { typography } from '../../../styles/theme';
import ButtonFilled from '../../atoms/ButtonFilled';
import Typograph from '../../atoms/Typograph';
import { Container } from './styles';

const FooteerCredits = (): JSX.Element => {
  return (
    <Container>
      <Image source={logoWhite} />
      <Typograph
        style={{ textAlign: 'center' }}
        size={12}
        color={theme.colors.white}
        family={typography.RobotoRegular}
      >
        O Coursify.me é uma plataforma de ensino a distância,{'\n'}onde qualquer pessoa ou empresa
        pode construir seu {'\n'}EAD e vender cursos pela internet.
      </Typograph>
      <ButtonFilled>Quero conhecer a plataforma!</ButtonFilled>
    </Container>
  );
};

export default FooteerCredits;
