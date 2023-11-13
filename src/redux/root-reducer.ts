import {combineReducers} from "redux";
import todosReducer from "../components/todo/reducer";
import {accountReducer} from "../components/bank/accounts/accountSlice";
import {StateType} from "typesafe-actions";
import customerReducer from "../components/bank/customers/reducer";

const rootReducer = combineReducers({
    customer: customerReducer,
    todos: todosReducer,
    account: accountReducer
})

export default rootReducer;

