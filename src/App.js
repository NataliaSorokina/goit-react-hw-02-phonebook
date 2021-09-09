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
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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

  render() {
    // const { name, number } = this.state.contacts;
    return (
      <div>
        <h1>Phonebook</h1>
        {
          <ContactForm
            onSubmit={
              this.formSubmitHandler
            } /* name={this.state.name} inputChange={this.handleInputChange} number={this.state.number} submit={this.handleSubmit} */
          />
        }

        <Section title="Contacts">
          {
            <ContactList
              /* name={this.state.name} number={this.state.number} */ contacts={this.state.contacts}
            />
          }
        </Section>
      </div>
    );
  }
}

export default App;
