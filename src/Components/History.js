import React, { useContext } from 'react'
import { GlobalState } from '../context/GlobalState'
function History() { 
    const {state,delTransaction} = useContext(GlobalState);
    console.log(state)
    return (
        <div className="history-container">
            <h4>History</h4>
            <ul className="list">
            {state.map(transaction => {
                return (
                    <li key={transaction.id} className={`${transaction.transactionAmount > 0 ? "plus" : "minus"}`}>
                        {transaction.transactionTitle}
                        <span>{transaction.transactionAmount}</span>
                        <button className="delete-btn" 
                        onClick={()=>delTransaction(transaction.id)}>X</button>
                    </li>
                    
                )
            })}
            </ul>
        </div>
    )
}

export default History;