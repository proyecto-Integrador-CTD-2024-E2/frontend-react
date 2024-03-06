import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; 
import Admin from './Admin';

export const PrivateRoute = () => {
//   const { token } = useAuth();
 const { authed } = useAuth();
  console.log(authed)
  return authed ? <Admin /> : <Navigate to="/" />;
  
};

