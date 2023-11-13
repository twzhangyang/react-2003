import {combineReducers} from "redux";
import {customerReducer} from "../components/bank/customers/customerSlice";
import todosReducer from "../components/todo/reducer";

const rootReducer = combineReducers({
    customer: customerReducer,
    todos: todosReducer
})

export default rootReducer;

