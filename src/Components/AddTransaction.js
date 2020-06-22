import React, { useContext, useState } from 'react'
import { GlobalState } from '../context/GlobalState'



function AddTranscation() {
    const { state, addTransaction } = useContext(GlobalState)
    let [transactionTitle, setTransactionTitle] = useState('');
    let [amount, setAmount] = useState(0);

    const addTrans = (transObj) => {
        return (
            addTransaction(transObj)
        )
    }
    const formHandler = (e) => {
        e.preventDefault();
        if (Number(amount) !== 0)
            addTrans({
                id: new Date().getTime(),
                amount: amount,
                title: transactionTitle
            })
        setTransactionTitle('')
        setAmount(0)
    }
    return (
        <div className="add-transc-container">
            <form onSubmit={formHandler} >
                <h4>Add new transaction</h4>
                <label htmlFor="text">Text</label>
                <input id="text" type="text"
                    placeholder="Transaction Title"
                    value={transactionTitle}
                    onChange={(e) => {
                        setTransactionTitle(e.target.value)
                        console.log(transactionTitle)
                    }
                    } required />
                <br />
                <label htmlFor="amount">Amount <br />
                ( negative as expense, positive as income )
                </label>
                <input id="amount" type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} required />
                <br />
                <input type="submit" value="Add Transaction"
                    id="submit" />
            </form>
        </div>
    )



}

export default AddTranscation;