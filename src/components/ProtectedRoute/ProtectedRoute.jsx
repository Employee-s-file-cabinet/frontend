import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...props }) =>
  props.isLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/signin" replace />
  );

export default ProtectedRoute;
