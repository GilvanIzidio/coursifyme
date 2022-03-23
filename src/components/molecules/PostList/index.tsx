import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import Post from '../../../models/Post';
import removeHtmlAttributes from '../../../utils/removeHtmlAttributes';
import PostItem from '../../organism/PostItem';

type PostListProps = {
  data: Post[];
  onChange?: () => void;
};

const PostList = ({ data, onChange }: PostListProps): JSX.Element => {
  const renderItem = ({ item: { title, excerpt } }: ListRenderItemInfo<Post>) => {
    const replacedResume = removeHtmlAttributes(excerpt.rendered);
    return <PostItem title={title.rendered} resume={replacedResume} uri=" " />;
  };

  const separatorComponent = () => {
    return <View style={{ width: 15 }} />;
  };

  return (
    <FlatList
      style={{ flex: 1 }}
      data={data}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      initialNumToRender={5}
      onEndReachedThreshold={0.1}
      horizontal
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={separatorComponent}
    />
  );
};

export default PostList;
