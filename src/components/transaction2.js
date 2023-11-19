import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction2 = (props) => {
    const {deleteTransaction}=useContext(GlobalContext)
    const sign = props.transaction.amount < 0 ? '-' : '+';
  return (
    <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>
    <span className='text'>{props.transaction.text}</span><span>{sign}${Math.abs(props.transaction.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(props.transaction.id)}>x</button>
   </li> 
  )
}

// export default transaction2
