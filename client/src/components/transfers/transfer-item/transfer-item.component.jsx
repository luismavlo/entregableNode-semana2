import classes from './transfer-item.module.css';
import moment from 'moment';

const TransferItem = ({ transfer }) => {
  const formattedDate = moment(transfer.date).format('MMM Do YY');
  const formattedAmount = transfer.amount.toFixed(2);
  console.log(transfer);

  return (
    <div className={classes.transfer}>
      <p className={classes['transfer__date']}>Date: {formattedDate}</p>
      <p className={classes['transfer__amount']}>Amount: ${formattedAmount}</p>
    </div>
  );
};

export default TransferItem;
