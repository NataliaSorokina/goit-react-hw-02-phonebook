import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    console.log(event.currentTarget);
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name" /* className={} */>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// ContactForm.propTypes = {
//
// };

export default ContactForm;
