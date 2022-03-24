import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { WebView } from 'react-native-webview';
import TopBar from '../../components/molecules/TopBar';
import { AppStackRoutesParamList } from '../../routes/index.routes';
import { Container, Content } from './styles';

type PostDetailProps = NativeStackScreenProps<AppStackRoutesParamList, 'PostDetail'>;

const PostDetail = ({ route: { params } }: PostDetailProps): JSX.Element => {
  return (
    <Container>
      <WebView source={{ uri: params.url }} />
      <Content>
        <TopBar />
      </Content>
    </Container>
  );
};

export default PostDetail;
