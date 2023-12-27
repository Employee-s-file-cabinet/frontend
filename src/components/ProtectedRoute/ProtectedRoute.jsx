import { Navigate } from 'react-router-dom';

// const { REACT_APP_NODE_ENV, REACT_APP_PUBLIC_URL } = process.env;

const ProtectedRoute = ({ element: Component, ...props }) =>
  props.isLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate
      // to={`${REACT_APP_NODE_ENV === 'production' ? REACT_APP_PUBLIC_URL : '/'}`}
      to="/"
      replace
    />
  );

export default ProtectedRoute;
