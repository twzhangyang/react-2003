import {createReducer} from "typesafe-actions";
import {payLoan, requestLoan, withdraw} from "./actions";
import {Account} from "MyModels";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false,
};
const reducer = createReducer(initialState as Account)
    .handleAction(withdraw, (state, action) => ({
        ...state, balance: state.balance - +action.payload
    }))
    .handleAction(requestLoan, (state, action) => ({
            ...state,
            loan: +action.payload.amount,
            loanPurpose: action.payload.purpose,
            balance: state.balance + +action.payload.amount,
        }
    ))
    .handleAction(payLoan, (state, action) => ({
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan
    }))
;

export default reducer;
