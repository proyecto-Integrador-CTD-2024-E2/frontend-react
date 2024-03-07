import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; 
import Admin from './Admin';

export const PrivateRoute = () => {
//   const { token } = useAuth();
 const { token } = useAuth();
  console.log(token)
  return token ? <Admin /> : <Navigate to="/" />;
  
};

