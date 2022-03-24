type Post = {
  id: string;
  guid: {
    rendered: string;
  };
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
};

export default Post;
