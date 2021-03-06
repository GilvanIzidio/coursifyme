import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import PostDataCompleted from '../../../models/PostCompleted';
import removeHtmlAttributes from '../../../utils/removeHtmlAttributes';
import PostItem from '../../organism/PostItem';

type PostListProps = {
  data: PostDataCompleted[];
  onPress: (url: string) => void;
};

const PostList = ({ data, onPress }: PostListProps): JSX.Element => {
  const renderItem = ({
    item: { title, excerpt, urlImage, guid },
  }: ListRenderItemInfo<PostDataCompleted>) => {
    const replacedResume = removeHtmlAttributes(excerpt.rendered);
    return (
      <PostItem
        title={title.rendered}
        resume={replacedResume}
        uri={urlImage}
        onPress={() => onPress(guid.rendered)}
      />
    );
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
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={separatorComponent}
    />
  );
};

export default PostList;
