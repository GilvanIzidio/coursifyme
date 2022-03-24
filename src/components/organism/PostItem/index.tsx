import React from 'react';
import theme, { typography } from '../../../styles/theme';
import Typograph from '../../atoms/Typograph';
import { Container, PostImage, Content } from './styles';

type PostItemProps = {
  title: string;
  resume: string;
  uri: string;
  onPress: () => void;
};

const PostItem = ({ title, resume, uri, onPress }: PostItemProps): JSX.Element => {
  return (
    <Container style={theme.shadowStyle} activeOpacity={0.8} onPress={onPress}>
      <PostImage
        source={{
          uri,
        }}
      />
      <Content>
        <Typograph numberOfLines={2} size={17}>
          {title}
        </Typograph>

        <Typograph
          numberOfLines={4}
          size={15}
          family={typography.RobotoRegular}
          color={theme.colors.gray150}
          style={{ textAlign: 'left' }}
        >
          {resume}
        </Typograph>

        <Typograph size={16} color={theme.colors.orange}>
          Leia mais
        </Typograph>
      </Content>
    </Container>
  );
};

export default PostItem;
