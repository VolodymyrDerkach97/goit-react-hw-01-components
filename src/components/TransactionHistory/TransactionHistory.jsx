import PropTypes from 'prop-types';
import TransactionHistoryItem from '../TransactionHistoryItem';
import { Table, HeaderTable } from './TransactionHistoryItem.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <HeaderTable>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </HeaderTable>

      <tbody>
        {items.map(item => {
          return <TransactionHistoryItem key={item.id} {...item} />;
        })}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
