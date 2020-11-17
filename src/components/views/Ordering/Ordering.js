import React from 'react';
import styles from './Ordering.scss'
import Button from '@material-ui/core/Button';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    <Button variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/ordering/order/abc123`}>order id</Button>
    <Button variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/ordering/new`}>new order</Button>
  </div>
);

export default Ordering;