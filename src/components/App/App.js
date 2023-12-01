/* eslint-disable no-unused-vars */
import { useState, lazy, Suspense} from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Contexts from '../../contexts/Contexts';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader'

const GeneralLayout = lazy(() => import('../../layouts/GeneralLayout/GeneralLayout'));
const AccessRestorePage = lazy(() => import('../../pages/AccessRestorePage/AccessRestorePage'));
const AdminPage = lazy(() => import('../../pages/AdminPage/AdminPage'));
const CompanyStructurePage = lazy(() => import('../../pages/CompanyStructurePage/CompanyStructurePage'));
const EmployeePage = lazy(() => import('../../pages/EmployeePage/EmployeePage'));
const EmployeesByAZPage = lazy(() => import('../../pages/EmployeesByAZPage/EmployeesByAZPage'));
const EmpoyeesByDepartmentPage = lazy(() => import('../../pages/EmpoyeesByDepartmentPage/EmpoyeesByDepartmentPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const NewEmployeePage = lazy(() => import('../../pages/NewEmployeePage/NewEmployeePage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NorFoundPage'));
const { REACT_APP_NODE_ENV, REACT_APP_PUBLIC_URL } = process.env



function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // routes
  const routes = createRoutesFromElements(
    <Route path="/">
      <Route element={<GeneralLayout />}>
        <Route index element={<MainPage />} />

        <Route path="employees" element={<ProtectedRoute element={EmployeesByAZPage} isLoggedIn={isLoggedIn}/>} />
        <Route path="departments" element={<ProtectedRoute element={EmpoyeesByDepartmentPage} isLoggedIn={isLoggedIn}/>} />
        <Route path="company-structure" element={<ProtectedRoute element={CompanyStructurePage} isLoggedIn={isLoggedIn}/>} />
        <Route path="employee" element={<ProtectedRoute element={EmployeePage} isLoggedIn={isLoggedIn}/>} />
        <Route path="newemployee" element={<ProtectedRoute element={NewEmployeePage} isLoggedIn={isLoggedIn}/>} />

        <Route path="accessrestore" element={<AccessRestorePage/>}/>
        <Route path="signin" element={<LoginPage/>}/>
        <Route path="admin" element={<AdminPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Route>
  );

  const router = createHashRouter(routes);

	return (
		<Suspense fallback={<Preloader/>}>
      <Contexts
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
      >
        <RouterProvider router={router} />
      </Contexts>
    </Suspense>
	);
}

export default App;
