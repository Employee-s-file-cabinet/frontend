/* eslint-disable no-unused-vars */
import { useState, Suspense } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Contexts from '../../contexts/Contexts';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

import GeneralLayout from '../../layouts/GeneralLayout/GeneralLayout';
import ServiceLayout from '../../layouts/ServiceLayout/ServiceLayout';
import AccessRestorePage from '../../pages/AccessRestorePage/AccessRestorePage';
import AdminPage from '../../pages/AdminPage/AdminPage';
import CompanyStructurePage from '../../pages/CompanyStructurePage/CompanyStructurePage';
import EmployeePage from '../../pages/EmployeePage/EmployeePage';
import EmployeesByAZPage from '../../pages/EmployeesByAZPage/EmployeesByAZPage';
import EmpoyeesByDepartmentPage from '../../pages/EmployeesByDepartmentPage/EmployeesByDepartmentPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainPage from '../../pages/MainPage/MainPage';
import NewEmployeePage from '../../pages/NewEmployeePage/NewEmployeePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const { REACT_APP_NODE_ENV, REACT_APP_PUBLIC_URL } = process.env;

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // routes
  const routes = createRoutesFromElements(
    <Route path="/">
      <Route element={<ServiceLayout />}>
        <Route path="signin" element={<LoginPage />} />
        <Route path="accessrestore" element={<AccessRestorePage />} />
        <Route index element={<MainPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route element={<GeneralLayout />}>
        <Route
          path="kartoteka_sotrudnikov"
          element={
            <ProtectedRoute
              element={EmployeesByAZPage}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="departamenty"
          element={
            <ProtectedRoute
              element={EmpoyeesByDepartmentPage}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="struktura_kompanii"
          element={
            <ProtectedRoute
              element={CompanyStructurePage}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="kartochka_sotrudnika"
          element={
            <ProtectedRoute element={EmployeePage} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path="novyyi_sotrudnik"
          element={
            <ProtectedRoute element={NewEmployeePage} isLoggedIn={isLoggedIn} />
          }
        />
      </Route>
    </Route>
  );

  const router = createHashRouter(routes);

  return (
    <Suspense fallback={<Preloader />}>
      <Contexts currentUser={currentUser} isLoggedIn={isLoggedIn}>
        <RouterProvider router={router} />
      </Contexts>
    </Suspense>
  );
}

export default App;
