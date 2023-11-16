// export const customerReducer = (state = initialState, action: any) => {
//     switch (action.type) {
//         case "customer/createCustomer":
//             return {
//                 ...state,
//                 fullName: action.payload.fullName,
//                 nationalID: action.payload.nationalID,
//                 createdAt: action.payload.createdAt,
//             };
//         case "customer/updateName":
//             return {...state, fullName: action.payload};
//         default:
//             return state;
//     }
// }

import {createReducer} from "typesafe-actions";
import {CustomerModel} from "./customerType";
import {createCustomer, updateName} from "./actions";

const reducer =
    createReducer({fullName: '', nationalID: '', createdAt: ''} as CustomerModel)
        .handleAction(createCustomer, (state, action) => {
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt
            }
        })
        .handleAction(updateName, (state, action) => ({
            ...state,
            fullName: action.payload.name
        }))
;

export default reducer;

