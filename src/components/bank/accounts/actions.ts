import {createAction, createAsyncAction} from "typesafe-actions";
import {Account} from "MyModels";

export const deposit = createAsyncAction(
    'account/deposit/request',
    'account/deposit/success',
    'account/deposit/failure',
)<Account, Account, string>();

export const withdraw = createAction('account/withdraw',
    (amount: string) => ({amount}))();

export const requestLoan = createAction('account/requestLoan',
    (amount: string, purpose: string) => ({
        amount,
        purpose
    }))();

export const payLoan = createAction('account/payLoan')();
