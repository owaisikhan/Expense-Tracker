import React, { useContext, createContext } from 'react'
import '../App.css'
// Global transactions
import {GlobalState} from '../context/GlobalState'
function InOut(){
    const {state} = useContext(GlobalState)
    const getIncome=()=>{
        let income = 0;
        for(let i in state)
         income +=   state[i].transactionAmount >0 ?  Number(state[i].transactionAmount) : 0
         return income
    }
    const getExpense=()=>{
        let expense = 0;
        for(let i in state)
        expense +=   state[i].transactionAmount <0 ? Number(state[i].transactionAmount) : 0
        return expense;
    }
    return(
        <div className="balance-container">
            <div>
                <h4>INCOME</h4>
                <h5>${getIncome()}</h5>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <h5>${getExpense()}</h5>
            </div>
        </div>
    )
}

export default InOut;