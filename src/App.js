import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class App extends React.Component {
  state = {
    // contacts: []
    contacts: [
      { id: 'BlindBandit', name: 'Toph Beifong', number: '459-12-56' },
      { id: 'BlueSpirit', name: 'Zuko Sifu-Hotman', number: '443-89-12' },
      { id: 'ColdFire', name: 'Azula Sozin', number: '645-17-79' },
      { id: 'AirNomad', name: 'Aang Twinkletoes', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    // console.log(data);
    const { name, number } = data;
    const newData = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.setState({
      contacts: [newData, ...this.state.contacts],
    });
    console.log(this.state.contacts);
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

  render() {
    // const { name, number } = this.state.contacts;
    const filteredContacts = this.getfilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm
          onSubmit={
            this.formSubmitHandler
          } /* name={this.state.name} inputChange={this.handleInputChange} number={this.state.number} submit={this.handleSubmit} */
        />

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterChangeHandler} />
          <ContactList
            /* name={this.state.name} number={this.state.number} */ contacts={filteredContacts}
          />
        </Section>
      </div>
    );
  }
}

export default App;
