import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import styles from './Button.module.css';
function Button() {
  return (
    <button className={styles.btn}>
      <Link to="/movie">처음 목록으로..</Link>
    </button>
  );
}

export default Button;
