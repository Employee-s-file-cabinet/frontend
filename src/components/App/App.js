/* eslint-disable no-unused-vars */
import { useState, Suspense, useEffect, useContext } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
  useParams,
  Navigate,
} from 'react-router-dom';
import * as auth from '../../utils/api/Auth';
import Contexts from '../../contexts/Contexts';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import GeneralLayout from '../../layouts/GeneralLayout/GeneralLayout';
import ServiceLayout from '../../layouts/ServiceLayout/ServiceLayout';
import RestorePasswordPage from '../../pages/RestorePasswordPage/RestorePasswordPage';
import AdminPage from '../../pages/AdminPage/AdminPage';
import CompanyStructurePage from '../../pages/CompanyStructurePage/CompanyStructurePage';
import EmployeePage from '../../pages/EmployeePage/EmployeePage';
import EmployeesPage from '../../pages/EmployeesPage/EmployeesPage';
import EmpoyeesByDepartmentPage from '../../pages/EmployeesByDepartmentPage/EmployeesByDepartmentPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainPage from '../../pages/MainPage/MainPage';
import NewEmployeePage from '../../pages/NewEmployeePage/NewEmployeePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import PasswordResetPage from '../../pages/PasswordResetPage/PasswordResetPage';
import ResetSuccessPage from '../../pages/ResetSuccessPage/ResetSuccessPage';
import SuccessSentToEmailPage from '../../pages/SuccessSentToEmailPage/SuccessSentToEmailPage';
import { EmployeesFilterWrapper } from '../EmployeesFilterWrapper/EmployeesFilterWrapper';

function App() {
  const [lastPage, setLastPage] = useState(1);
  const [usersList, setUsersList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('login') === 'true') setIsLoggedIn(true);
  }, []);

  // routes
  const routes = createRoutesFromElements(
    <>
      <Route element={<ServiceLayout />}>
        <Route
          index
          element={
            isLoggedIn ? (
              <Navigate to="/employees/alphabet/1" />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route path="signin" element={<LoginPage />} />
        <Route path="access-restore" element={<RestorePasswordPage />} />
        <Route path="success-sent-email" element={<SuccessSentToEmailPage />} />
        <Route path="reset-success" element={<ResetSuccessPage />} />
        <Route
          path="access-restore/password-reset"
          element={<PasswordResetPage />}
        />
        <Route path="admin" element={<AdminPage />} />
        <Route
          path="*"
          element={
            <ProtectedRoute element={NotFoundPage} isLoggedIn={isLoggedIn} />
          }
        />
      </Route>
      <Route element={<GeneralLayout />}>
        <Route
          path="employees/:filterTeg/:searchQuery?/:pageNumber"
          element={
            <EmployeesFilterWrapper lastPage={lastPage}>
              <ProtectedRoute
                element={EmployeesPage}
                isLoggedIn={isLoggedIn}
                lastPage={lastPage}
                usersList={usersList}
                setUsersList={setUsersList}
                setLastPage={setLastPage}
              />
            </EmployeesFilterWrapper>
          }
        />
        <Route
          path="departments"
          element={
            <ProtectedRoute
              element={EmpoyeesByDepartmentPage}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="company-structure"
          element={
            <ProtectedRoute
              element={CompanyStructurePage}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="employee/:id"
          element={
            <ProtectedRoute element={EmployeePage} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path="new-employee"
          element={
            <ProtectedRoute element={NewEmployeePage} isLoggedIn={isLoggedIn} />
          }
        />
      </Route>
    </>
  );

  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<Preloader />}>
      <Contexts
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      >
        <RouterProvider router={router} />
      </Contexts>
    </Suspense>
  );
}

export default App;
