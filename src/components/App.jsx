import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout, HeroTitle, Title } from './Layout.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = newContact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  checkExistingContact = newContact => {
    const checked = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase() === newContact.name.toLowerCase();
    });
    if (checked.length !== 0) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.addNewContact(newContact);
    }
  };

  render() {
    const lowerCaseFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
    return (
      <Layout>
        <HeroTitle>Phonebook</HeroTitle>
        <ContactForm
          contacts={this.state.contacts}
          addNewContact={this.addNewContact}
          checkExistingContact={this.checkExistingContact}
        />
        <Title>Contacts</Title>
        <Filter filterContact={this.filterContact} value={this.state.filter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
