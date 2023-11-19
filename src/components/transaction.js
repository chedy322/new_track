import React,{useContext} from 'react';
import {Transaction2} from './transaction2';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = () => {
  const {transactions}=useContext(GlobalContext);
  // console.log(context);

  return (
    <>
    <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction=>(<Transaction2 key={transaction.id} transaction={transaction}/>))}
 
      </ul>
      
    </>
  )
}


