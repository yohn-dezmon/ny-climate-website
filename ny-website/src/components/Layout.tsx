import { Outlet } from "react-router-dom";
import Title from "./Title";
import TitleBar from "./TitleBar";

const Layout = () => {
  return (
    <div className="app">
      <Title className="mb-4" />
      <TitleBar />
      <Outlet /> {/* This is where the routed page content will be rendered */}
    </div>
  );
};

export default Layout;
