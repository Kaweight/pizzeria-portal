import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.scss'

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/:id`}>Add new event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Add new reservation</Link>
  </div>
);

export default Tables;