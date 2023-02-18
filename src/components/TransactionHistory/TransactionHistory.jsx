import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
import { TableTitle } from './TransactionHistory.styled';
import { TableData } from './TransactionHistory.styled';
import { TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <TableTitle>Type</TableTitle>
            <TableTitle>Amount</TableTitle>
            <TableTitle>Currency</TableTitle>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }, index) => {
            return (
              <TableRow key={id}>
                <TableData>{type}</TableData>
                <TableData>{amount}</TableData>
                <TableData>{currency}</TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
