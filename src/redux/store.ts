import {combineReducers, createStore} from "redux";
import {customerReducer} from "../components/bank/customers/customerSlice";

const rootReducer = combineReducers({
    customer: customerReducer
})

export const store = createStore(rootReducer);

// console.log(store.getState());
// store.dispatch({
//     type: "customer/createCustomer",
//     payload: {
//         fullName: "Test name",
//         nationalID: "12345",
//         createdAt: new Date().toISOString(),
//     }
// })
// console.log(store.getState());

