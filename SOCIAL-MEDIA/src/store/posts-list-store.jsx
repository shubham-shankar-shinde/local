import { createContext, useReducer } from "react";

export const postListStore = createContext({
  postList: [],
  addpostList: () => {},
  deletepost: () => {},
});
const postlistReducer = (currentval, action) => {
  let newpostlist = currentval;
  if (action.type === "delete_post") {
    newpostlist = currentval.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "add_post") {
    newpostlist = [action.payload, ...currentval];
  }

  return newpostlist;
};
const PostListprovider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(postlistReducer, []);
  const addpostList = (userid, title, body, reactions, tags) => {
    dispatchpostList({
      type: "add_post",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userid,
        tags: tags,
      },
    });
  };
  const deletepost = (postId) => {
    dispatchpostList({
      type: "delete_post",
      payload: {
        postId,
      },
    });
  };
  return (
    <postListStore.Provider
      value={{
        postList: postList,
        addpostList: addpostList,
        deletepost: deletepost,
      }}
    >
      {children}
    </postListStore.Provider>
  );
};

export default PostListprovider;
