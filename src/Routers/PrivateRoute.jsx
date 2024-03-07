import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; 


export const PrivateRoute = () => {

 const { isLogged } = useAuth();
  //console.log(token)
  return isLogged ? <Outlet /> : <Navigate to="/" />;
  
};

