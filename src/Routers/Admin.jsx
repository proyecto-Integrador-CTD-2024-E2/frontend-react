import { Outlet } from "react-router-dom";
import PanelAdmin from "../Components/PanelAdmin";

const Admin = () => {
  return (
    <div className="flex pt-2">
      <PanelAdmin />
      <Outlet />
    </div>
  );
};

export default Admin;
