import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 15px;
`;

export const View = styled.View`
  padding-left: 8px;
  padding-right: 8px;
`;

export const ViewSelectOder = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewTitle = styled.View`
  flex-direction: row;
  padding-bottom: 15px;
  align-items: center;
  justify-content: space-between;
`;

export const ViewFlatList = styled.View`
  width: 100%;
  height: 350px;
  padding-top: 10px;
`;
