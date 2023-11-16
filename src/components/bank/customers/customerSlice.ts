import {CustomerModel} from "./customerType";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CustomerModel = {
    fullName: "",
    nationalID: "",
    createdAt: "",
};

export const customerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt,
            };
        case "customer/updateName":
            return {...state, fullName: action.payload};
        default:
            return state;
    }
}

const slice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        updateName: (state, action: PayloadAction<string>) => {
            state.fullName = action.payload
        },
        createCustomer: (state, action: PayloadAction<{ fullName: string, nationalID: string }>) => {
            state.fullName = action.payload.fullName;
            state.nationalID = action.payload.nationalID;
            state.createdAt = new Date().toISOString();
        }
    }
});

export const {updateName, createCustomer} = slice.actions;
export default slice.reducer;
