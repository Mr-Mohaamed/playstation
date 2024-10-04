import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import SonyBar from "../components/SonyBar";

const GuestLayout = () => {
  return (
    <div className="min-h-screen relative  font-cairo flex flex-col justify-between">
      <SonyBar />
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default GuestLayout;
