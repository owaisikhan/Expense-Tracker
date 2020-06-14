import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header'
import Balance from './Components/Balance'
import InOut from './Components/InOut'
import History from './Components/History'
import AddTransaction from './Components/AddTransaction'

function App(){
  let [count,setCount] = useState(0);
  return(
    <div className="App">
      <div className="Parent">
        <Header/>
        <Balance/>
        <br/>
        <InOut/>
        <History/>
        <AddTransaction f={()=>setCount(++count)}/>
       <h4>value of counter is {count}</h4>
      </div>
    </div>
  )
}

export default App;
