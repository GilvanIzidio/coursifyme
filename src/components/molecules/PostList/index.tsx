import React from 'react';
import { FlatList, View } from 'react-native';
import PostItem from '../../organism/PostItem';

type PostListProps = {
  data: any;
  onChange?: () => void;
};

const PostList = ({ data, onChange }: PostListProps): JSX.Element => {
  const renderItem = ({ item }: any) => {
    return <PostItem title={item.title} resume={item.resume} uri={item.uri} />;
  };

  const separatorComponent = () => {
    return <View style={{ width: 15 }} />;
  };
  return (
    <FlatList
      style={{ flex: 1 }}
      data={data}
      onEndReachedThreshold={0.1}
      horizontal
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={separatorComponent}
    />
  );
};

export default PostList;
