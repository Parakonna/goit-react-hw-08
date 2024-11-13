import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsError,
  selectContactsIsLoading,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { apiGetContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <p>
          Oops, some error occured &quot;{error}&quot;. Please, try again later
          🤷‍♂️.
        </p>
      )}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default ContactsPage;
