import React, { useContext } from 'react'
import { GlobalState } from '../context/GlobalState';

function Balance() {
    const { state } = useContext(GlobalState)
    const getBalance = () => {
        let balance = 0
        for (let i in state)
            balance += Number(state[i].transactionAmount);
        return balance
    }
    return (
        <div className="balance">
            <h4>YOUR BALANCE</h4>
            <h3>${getBalance()}</h3>
        </div>
    )
}

export default Balance;