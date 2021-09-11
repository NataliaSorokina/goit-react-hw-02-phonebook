import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
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
    const newData = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    if (contacts.some(contact => contact.name === newData.name)) {
      alert(`${newData.name} is already in contacts`);
      return;
    } else {
      this.setState({
        contacts: [...this.state.contacts, newData],
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
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterChangeHandler} contact />
          <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
        </Section>
      </div>
    );
  }
}

export default App;
