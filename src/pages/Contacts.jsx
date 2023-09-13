import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export const Contacts = () => {
  return (
    <>
      <ContactForm />
      <ContactList />
      <Filter />
    </>
  );
};
