import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import PostListprovider from "../store/posts-list-store";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
function App() {
  return (
    <PostListprovider>
      <div className="app-container">
        <SideBar />
        <div className="container">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListprovider>
  );
}

export default App;
