import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { getUsersTransfers } from '../../../store/actions/transfers.actions';

// Components
import TransferItem from '../transfer-item/transfer-item.component';

import classes from './transfer-history.module.css';

const TransferHistory = () => {
  const uid = localStorage.getItem('uid');
  const dispatch = useDispatch();
  const { transfers } = useSelector(state => state.transfers);
  console.log(transfers);

  useEffect(() => {
    dispatch(getUsersTransfers(uid));
  }, [dispatch, uid]);

  return (
    <div>
      {transfers &&
        transfers.map(transfer => <TransferItem transfer={transfer} />)}
    </div>
  );
};

export default TransferHistory;
