import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { apiGetCurrentUser } from './redux/auth/operations.js';
import { selectUserDataIsRefreshing } from './redux/auth/selectors.js';

import { PrivateRoute } from './components/PrivateRoute.jsx';
import { RestrictedRoute } from './components/RestrictedRoute.jsx';
import Layout from './components/Layout.jsx';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() =>
  import('../src/pages/RegistrationPage/RegistrationPage.jsx'),
);
const LoginPage = lazy(() => import('../src/pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() =>
  import('../src/pages/ContactsPage/ContactsPage.jsx'),
);
/* import { fetchContacts } from './redux/contactsOps.js'; */

function App() {
  const isRefreshing = useSelector(selectUserDataIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
