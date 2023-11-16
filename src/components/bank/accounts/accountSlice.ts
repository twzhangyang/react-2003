import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Account} from "MyModels";
import {AppThunk} from "../../../redux-rtk/store";
import {incrementByAmount, selectCount} from "../../counter/counterSlice";

const initialState: Account = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false,
    currency: "USD",
};

const slice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        depositUS: (state, action: PayloadAction<number>) => {
            state.balance += action.payload;
            state.currency = "USD";
        },
        withdraw: (state, action: PayloadAction<number>) => {
            state.balance -= action.payload;
        },
        requestLoan: (state, action: PayloadAction<{ loan: number, loanPurpose: string }>) => {
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
    },
    extraReducers: (builder) => {
        builder.addCase(depositOtherCurrency.fulfilled, (state, action) => {
            state.balance += action.payload;
        })
    }
})

export const depositOtherCurrency = createAsyncThunk('account/convertCurrency',
    async ({amount, currency}: { amount: number, currency: string }) => {
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
        const data: any = await response.json();
        return (data.rates.USD as number);
    })

export const deposit = ({amount, currency}: { amount: number, currency: string }): AppThunk =>
    (dispatch, getState) => {
        if (currency === "USD") {
            dispatch(depositUS(amount));
        } else {
            dispatch(depositOtherCurrency({amount, currency}))
        }
    }

export const {depositUS, withdraw, requestLoan, payLoan} = slice.actions;
export default slice.reducer;
