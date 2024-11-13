import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsError,
  selectContactsIsLoading,
} from '../../redux/contakts/selectors';
import { useEffect } from 'react';
import { apiGetContacts } from '../../redux/contakts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';

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
      <ContactList />
    </>
  );
};

export default ContactsPage;
