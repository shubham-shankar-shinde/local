import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Fetchitems from "../Components/Fetchitems";

function App() {
  return (
    <>
      <Header />
      <Fetchitems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
