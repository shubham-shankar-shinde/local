import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import PostListprovider from "./store/posts-list-store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <PostListprovider>
      <div className="app-container">
        <SideBar></SideBar>
        <div className="container">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListprovider>
  );
}

export default App;
