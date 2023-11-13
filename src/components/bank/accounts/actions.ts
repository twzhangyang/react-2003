import {createAction} from "typesafe-actions";

export const withdraw = createAction('account/withdraw',
    (amount: string) => ({amount}))();

export const requestLoan = createAction('account/requestLoan',
    (amount: string, purpose: string) => ({
        amount,
        purpose
    }))();

export const payLoan = createAction('account/payLoan')();
