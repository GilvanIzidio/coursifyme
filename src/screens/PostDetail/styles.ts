import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  width: 100%;
  height: 90px;
  position: absolute;
  background-color: ${theme.colors.background};
`;
