import { Outlet } from 'react-router-dom';
import PanelAdmin from '../Components/PanelAdmin';

const Admin = () => {
    return (
        <div className='d-flex flex-row p-4 pt-5'>
            <PanelAdmin/>
            <Outlet/>
        </div>
    );
};

export default Admin;