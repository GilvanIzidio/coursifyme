import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ViewSelectOder = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
