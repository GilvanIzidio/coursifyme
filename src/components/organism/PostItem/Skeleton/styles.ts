import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const ViewLine = styled.View``;

export const Container = styled.View`
  width: 250px;
  height: 260px;
  border-radius: 15px;
  margin-left: 15px;
  overflow: hidden;
  background-color: ${theme.colors.background};
`;

export const PostImageView = styled.View`
  width: 100%;
  height: 100px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${theme.colors.gray100};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-evenly;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 10px;
`;

export const ViewTitle = styled.View`
  width: 200px;
  height: 18px;
  background-color: ${theme.colors.gray100};
`;

export const ViewResume = styled.View`
  width: 150px;
  height: 15px;
  background-color: ${theme.colors.gray100};
`;

export const ViewReadMore = styled.View`
  width: 80px;
  height: 15px;
  background-color: ${theme.colors.gray100};
`;
