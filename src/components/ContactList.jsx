import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsThunk';
import { selectFilterContacts } from 'redux/selector';

export function ContactList() {
  const contacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:{contact.number}
          <button onClick={() => onDeleteContact(contact.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
