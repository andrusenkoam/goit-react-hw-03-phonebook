import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Container,
  PhonebookTitle,
  ContactsTitle,
  ContactsWraper,
} from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const addContact = {
      id: nanoid(),
      name,
      number,
    };

    const inContacts = contacts.find(
      contact => contact.name.toLowerCase() === addContact.name.toLowerCase()
    );

    if (inContacts) {
      return alert(`${addContact.name} is already in contacts!`);
    }

    this.setState(({ contacts }) => ({
      contacts: [addContact, ...contacts],
    }));
  };

  removeContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const renderContacts = this.getFilteredContacts();

    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onSubmit={this.addContact} />

        <ContactsWraper>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactFilter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={renderContacts} onClick={this.removeContact} />
        </ContactsWraper>
      </Container>
    );
  }
}
