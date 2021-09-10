import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
      </li>
    ))}
  </ul>
);

// ContactList.propTypes = {
//
// };

export default ContactList;
