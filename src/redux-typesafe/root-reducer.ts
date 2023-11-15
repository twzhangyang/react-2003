import {combineReducers} from "redux";
import todosReducer from "../components/todo/reducer";
import customerReducer from "../components/bank/customers/reducer";
import accountReducer from "../components/bank/accounts/reducer";

const rootReducer = combineReducers({
    customer: customerReducer,
    todos: todosReducer,
    account: accountReducer
})

export default rootReducer;

