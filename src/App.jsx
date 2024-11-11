/* import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx'; */
/* import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contakts/contactsOps.js'; */
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';
import Layout from './components/Layout.jsx';
/* import { fetchContacts } from './redux/contactsOps.js'; */

function App() {
  /*  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); */

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RegistrationPage />
              /*  <RegistrationPage
              redirectTo="/contacts"
              component={<RegistrationPage />}
            /> */
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage />
              /* <RegistrationPage
              redirectTo="/contacts"
              component={<LoginPage />}
            /> */
            }
          />
          <Route
            path="/contacts"
            element={
              <ContactsPage />
              /*  <RegistrationPage
              redirectTo="/login"
              component={<ContactsPage />}
            /> */
            }
          />
        </Routes>
      </Layout>
      {/*  <h1 style={{ marginLeft: '40px' }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList /> */}
    </div>
  );
}
export default App;
