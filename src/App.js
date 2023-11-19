import React,{ Component } from 'react';
import {Header} from './components/header.js';
import {Balance} from './components/balance.js';
import {Income} from './components/income.js';
import {Transaction} from './components/transaction.js';
import {Add} from './components/add.js';
import { GlobalProvider } from './context/GlobalState.js';
import './App.css';


function App(){
  return <div className="main">
  <GlobalProvider>
    <Header />
    <div className='container'>
      <Balance/>
      <Income/>
      <Transaction/>
      <Add/>

    </div>

  </GlobalProvider>
  </div>
}
export default App;