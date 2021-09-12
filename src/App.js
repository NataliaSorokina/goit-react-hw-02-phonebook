import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MainTitle } from './App.styled';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'BlindBandit', name: 'Toph Beifong', number: '459-12-56' },
      { id: 'SifuHotman', name: 'Zuko Roku', number: '443-89-12' },
      { id: 'BlueFire', name: 'Azula Sozin', number: '645-17-79' },
      { id: 'Twinkletoes', name: 'Aang Gyatso', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const { name, number } = data;
    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    } else {
      this.setState({
        contacts: [...this.state.contacts, newContact],
      });
    }
  };

  filterChangeHandler = event => {
    console.log(event.currentTarget.value);
    this.setState({ filter: event.currentTarget.value });
  };

  getfilteredContacts = () => {
    const normilizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(record =>
      record.name.toLowerCase().includes(normilizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getfilteredContacts();

    return (
      <>
        <MainTitle>Phonebook</MainTitle>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterChangeHandler} />
          <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
        </Section>
      </>
    );
  }
}

export default App;
