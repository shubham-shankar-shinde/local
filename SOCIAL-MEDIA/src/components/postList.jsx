import { useContext } from "react";
import Post from "./Post";
import { postListStore } from "../store/posts-list-store";

const PostList = () => {
  const { postList } = useContext(postListStore);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
