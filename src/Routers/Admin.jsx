import { Outlet } from "react-router-dom";
import PanelAdmin from "../Components/PanelAdmin";

const Admin = () => {
    return (
        <div className='flex flex-row p-5'>
            <PanelAdmin/>
            <Outlet/>
        </div>
    );
};

export default Admin;
