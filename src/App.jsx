import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
