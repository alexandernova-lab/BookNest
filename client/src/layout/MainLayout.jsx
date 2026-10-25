import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className=" max-w-page mx-auto bg-background">
      <Outlet />
    </div>
  );
};

export default MainLayout;
