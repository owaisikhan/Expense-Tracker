import React from 'react';
import './App.css';
import Header from './Components/Header'
import Balance from './Components/Balance'
import InOut from './Components/InOut'
import History from './Components/History'
import AddTransaction from './Components/AddTransaction'
// GlobalState
import { GlobalStateProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalStateProvider>
        <div className="Parent">
          <Header />
          <Balance />
          <br />
          <InOut />
          <History />
          <AddTransaction />
        </div>
    </GlobalStateProvider>
  )
}

export default App;
