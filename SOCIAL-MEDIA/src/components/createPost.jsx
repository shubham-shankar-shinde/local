import { useContext, useRef } from "react";
import { postListStore } from "../store/posts-list-store";
import { Navigate, useNavigate } from "react-router-dom";

const Createpost = () => {
  const Navigate = useNavigate();
  const { addpostList } = useContext(postListStore);
  const useridval = useRef();
  const titleval = useRef();
  const bodyval = useRef();
  const reactionsval = useRef();
  const tagsval = useRef();
  const handlesubmit = (event) => {
    event.preventDefault();
    const userid = useridval.current.value;
    const title = titleval.current.value;
    const body = bodyval.current.value;
    const reactions = reactionsval.current.value;
    const tags = tagsval.current.value.split(" ");
    addpostList(userid, title, body, reactions, tags);
    Navigate("/");
    useridval.current.value = "";
    titleval.current.value = "";
    bodyval.current.value = "";
    reactionsval.current.value = "";
    tagsval.current.value = "";
  };
  return (
    <form className="create-post" onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Enter Your User Id
        </label>
        <input
          type="text"
          ref={useridval}
          className="form-control"
          id="userid"
          placeholder="Enter your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleval}
          className="form-control"
          id="title"
          placeholder="Enter your title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={bodyval}
          rows="5"
          className="form-control"
          id="body"
          placeholder=" Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          ref={reactionsval}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How Many Peoples reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Hashtags here
        </label>
        <input
          type="text"
          ref={tagsval}
          className="form-control"
          id="tags"
          placeholder=" please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
};
export default Createpost;
