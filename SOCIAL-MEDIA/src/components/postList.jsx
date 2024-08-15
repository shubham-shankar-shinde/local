import { useContext } from "react";
import Post from "./Post";
import { postListStore } from "../store/posts-list-store";
import Message from "./message";

const PostList = () => {
  const { postList } = useContext(postListStore);

  return (
    <>
      {postList.length === 0 && <Message></Message>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
