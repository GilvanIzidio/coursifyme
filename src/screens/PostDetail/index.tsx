import React from 'react';
import { ScrollView } from 'react-native';
import TopBar from '../../components/molecules/TopBar';
import FooteerCredits from '../../components/organism/FooteerCredits';
import { Container, Content } from './styles';

const PostDetail = (): JSX.Element => {
  return (
    <Container>
      <TopBar />
      <TopBar />
      <ScrollView style={{ flex: 1 }}>
        <></>
      </ScrollView>
      <FooteerCredits />
    </Container>
  );
};

export default PostDetail;
