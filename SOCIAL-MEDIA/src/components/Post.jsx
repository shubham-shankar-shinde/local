import { useContext } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { postListStore } from "../store/posts-list-store";

const Post = ({ post }) => {
  const { deletepost } = useContext(postListStore);
  return (
    <div className="card post-card">
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletepost(post.id)}
        >
          <RiDeleteBinFill />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge text-bg-primary tags-list"
          >{`#${tag}`}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} peoples
        </div>
      </div>
    </div>
  );
};
export default Post;
