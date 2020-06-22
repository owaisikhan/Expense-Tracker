
import React, { createContext, useReducer } from "react"
import { GlobalReducer } from './GlobalReducer'
import { initialState } from '../Components/Transactions'

export const GlobalState = createContext(initialState);
export const GlobalStateProvider = ({ children }) => {
    const [appState, dispatch] = useReducer(GlobalReducer, initialState);
    return (
        <GlobalState.Provider value={{
            state: appState.transactions,
            addTransaction: function (transObj) {
                (dispatch({
                    type: "ADD",
                    payload: {
                        id: transObj.id,
                        transactionAmount: transObj.amount,
                        transactionTitle: transObj.title

                    }
                }))
            },
            delTransaction: function (id) {
                (dispatch({
                    type: "DELETE",
                    payload: id
                }))
            }
        }}>
            {children}
        </GlobalState.Provider>
    )
}