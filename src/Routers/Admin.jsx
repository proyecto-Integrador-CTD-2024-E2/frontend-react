// import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PanelAdmin from '../Components/PanelAdmin';

const Admin = () => {
    // let navigate = useNavigate();

    // useEffect(() => {
    //     // Redirige a listado-productos como ruta por defecto dentro de /admin
    //     navigate('listar');
    // }, [navigate]);
    return (
        <div className='d-flex flex-row p-4 pt-5'>
            <PanelAdmin/>
            <Outlet/>
        </div>
    );
};

export default Admin;