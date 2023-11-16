import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Account} from "MyModels";
import {stat} from "fs";

const initialState: Account = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false,
};

export const accountReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload,
                isLoading: false,
            };
        case "account/withdraw":
            return {...state, balance: state.balance - action.payload};
        case "account/requestLoan":
            if (state.loan > 0) return state;
            // LATER
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };
        case "account/payLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };
        case "account/convertingCurrency":
            return {...state, isLoading: true};

        default:
            return state;
    }
}

const slice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        deposit: (state, action: PayloadAction<number>) => {
            state.balance += action.payload;
        },
        withdraw: (state, action: PayloadAction<number>) => {
            state.balance -= action.payload;
        },
        requestLoan: (state, action: PayloadAction<{ loan: number, loanPurpose: string}>) => {
            if (state.loan > 0) return;

            state.loan = action.payload.loan;
            state.loanPurpose = action.payload.loanPurpose;
            state.balance = state.balance + action.payload.loan;
        },
        payLoan: (state) => {
            state.balance = state.balance - state.loan
            state.loan = 0;
            state.loanPurpose = "";
        }
    }
})

// export const deposit = (amount: number, currency: string) => {
//     if (currency === "USD") return {type: "account/deposit", payload: amount};
//
//     return async (dispatch: any, getState: any) => {
//         dispatch({type: "account/convertingCurrency"});
//
//         const res = await fetch(
//             `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//         );
//         const data = await res.json();
//         const converted = data.rates.USD;
//
//         dispatch({type: "account/deposit", payload: converted});
//     };
// };

export const { deposit, withdraw, requestLoan, payLoan} = slice.actions;
export default slice.reducer;
