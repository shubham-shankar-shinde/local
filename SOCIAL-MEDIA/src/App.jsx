import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/postList";
import SideBar from "./components/SideBar";
import Createpost from "./components/createPost";
import { useState } from "react";
import PostListprovider from "./store/posts-list-store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const [SelectedTab, setSelectedTab] = useState("home");

  return (
    <PostListprovider>
      <div className="app-container">
        <SideBar
          SelectedTab={SelectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="container">
          <Header></Header>
          {SelectedTab === "home" ? <PostList></PostList> : <Createpost />}
          <Footer></Footer>
        </div>
      </div>
    </PostListprovider>
  );
}

export default App;
