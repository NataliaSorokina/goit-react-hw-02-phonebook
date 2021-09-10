import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Filter/Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name <input type="text" value={value} onChange={onChange} />
  </label>
);

// Filter.propTypes = {
//
// };

export default Filter;
