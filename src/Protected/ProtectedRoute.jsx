import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { authToken } = useAuth();

  // Directly check localStorage if authToken is not yet set
  const token = authToken || localStorage.getItem('token');

  // Redirect to login if there's no token
  return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
