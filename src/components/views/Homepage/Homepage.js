import React from 'react';
import styles from './Homepage.scss'
import Waiter from '../Waiter/Waiter';

const Homepage = () => (
  <div className={styles.component}>
    <h2>Homepage</h2>
    <Waiter />
  </div>
);

export default Homepage;