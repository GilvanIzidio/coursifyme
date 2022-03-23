import api from '../../http/api';
import Post from '../../models/Post';
import Media from '../../models/Media';

export const getPostByCategoryId = async (categoryId: string): Promise<Post[]> => {
  const { data } = await api.get<Post[]>('/posts', {
    params: {
      categories: categoryId,
    },
    timeout: 4000,
    timeoutErrorMessage: 'Network Error',
  });
  return data;
};

export const getImageBatchImageUrl = async (ids: number[]): Promise<Media[]> => {
  const { data } = await api.get<Media[]>('/media', {
    params: {
      include: ids.map(item => {
        return item;
      }),
    },
    timeout: 4000,
    timeoutErrorMessage: 'Network Error',
  });
  return data;
};
