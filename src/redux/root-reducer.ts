import {combineReducers} from "redux";
import {customerReducer} from "../components/bank/customers/customerSlice";
import todosReducer from "../components/todo/reducer";
import {accountReducer} from "../components/bank/accounts/accountSlice";
import {StateType} from "typesafe-actions";

const rootReducer = combineReducers({
    customer: customerReducer,
    todos: todosReducer,
    account: accountReducer
})

export default rootReducer;
export type AppState = StateType<typeof rootReducer>;

