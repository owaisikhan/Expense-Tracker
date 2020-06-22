
export const GlobalReducer = (state, action) => {
    switch (action.type) {

        case 'ADD':
            return {
                transactions: [ action.payload, ...state.transactions] }
        case 'DELETE':
            return {
                ...state,
                transactions: state.transactions
                    .filter(transaction => transaction.id !== action.payload)
            }
            
        default:
            return state;
    }
}