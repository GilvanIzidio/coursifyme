import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  flex: 1;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
