import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout, HeroTitle, Title } from './Layout.styled';

const getInitialContacts = () => {
  const localContacts = localStorage.getItem('contacts');
  if (localContacts !== null) {
    const parsedContacts = JSON.parse(localContacts);
    return parsedContacts;
  }
  return [];
};
export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => {
    setContacts(prevState => {
      return [...prevState, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  const filterContact = e => {
    setFilter(e.currentTarget.value);
  };

  const checkExistingContact = newContact => {
    const checked = contacts.filter(contact => {
      return contact.name.toLowerCase() === newContact.name.toLowerCase();
    });
    if (checked.length !== 0) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      addNewContact(newContact);
    }
  };
  const lowerCaseFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCaseFilter)
  );
  return (
    <Layout>
      <HeroTitle>Phonebook</HeroTitle>
      <ContactForm
        contacts={contacts}
        addNewContact={addNewContact}
        checkExistingContact={checkExistingContact}
      />
      <Title>Contacts</Title>
      <Filter filterContact={filterContact} value={filter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      <GlobalStyle />
    </Layout>
  );
};
