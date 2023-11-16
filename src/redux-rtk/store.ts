// v3. create store by redux toolkit

import {Action, combineReducers} from "redux";
import customerReducer from "../components/bank/customers/reducer";
import todosReducer from "../components/todo/reducer";
import accountReducer from "../components/bank/accounts/reducer";
import counterReducer from "../components/counter/counterSlice"
import {configureStore, ThunkAction} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    customer: customerReducer,
    todos: todosReducer,
    account: accountReducer,
    counter: counterReducer
})


const store = configureStore({
    reducer: rootReducer
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

