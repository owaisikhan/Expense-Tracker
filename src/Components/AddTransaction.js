import React from 'react'

function AddTranscation({f}){
    return(
        <div className="add-transc-container">
            <h4>Add new transaction</h4>
            <p>Text</p>
            <input id="text" type="text" placeholder="Transaction Title"/>
            <br/>
            <p>Amount</p>
            <p>( negative as expense, positive as income )</p>
            <input id="amount" type="number" value='0'/>
            <br/>
            <input type="button" value="Add Transaction" id="submit" onClick={f}/>
        </div>
    )
}

export default AddTranscation;