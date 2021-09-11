import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button
          type="button"
          className="ContactList__btn"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

// ContactList.propTypes = {
//
// };

export default ContactList;
