import React from 'react';
import styles from './Waiter.scss'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Waiter = () => (
  <div className={styles.component}>
    <Paper className={styles.component}>
      <h2>Waiter</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.head}>Number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Table number</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              1
            </TableCell>
            <TableCell>
              in progress..
            </TableCell>
            <TableCell>
              ok
            </TableCell>
            <TableCell>
              12
            </TableCell>
            <TableCell>
              none
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Waiter;