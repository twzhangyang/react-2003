import {applyMiddleware, combineReducers, createStore} from "redux";
import {customerReducer} from "../components/bank/customers/customerSlice";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    customer: customerReducer
})

// v1. Manually create store
// export const store = createStore(rootReducer);

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

// v2. Manually create store and integrate with redux dev tool and thunk middleware
// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// v3. create store by redux toolkit
export const store = configureStore({
    reducer: rootReducer
})
