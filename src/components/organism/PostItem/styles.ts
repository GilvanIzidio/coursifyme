import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const Container = styled.TouchableOpacity`
  width: 250px;
  height: 260px;
  border-radius: 15px;
  background-color: ${theme.colors.background};
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 100px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-evenly;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 10px;
`;
