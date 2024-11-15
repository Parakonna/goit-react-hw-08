import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { apiDeleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/slice';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);

  const onDeleteProfile = contactId => {
    dispatch(apiDeleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {Array.isArray(contacts) &&
        contacts.length > 0 &&
        contacts.map(profileItem => {
          return (
            <li key={profileItem.id} className={css.item}>
              <Contact
                id={profileItem.id}
                name={profileItem.name}
                number={profileItem.number}
                onDeleteProfile={onDeleteProfile}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
