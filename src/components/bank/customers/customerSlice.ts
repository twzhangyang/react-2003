const initialState = {
    fullName: "",
    nationalID: "",
    createdAt: "",
};

export type CustomerModel = typeof initialState;

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

export const createCustomer = (fullName: string, nationalID: string) => ({
    type: "customer/createCustomer",
    payload: {fullName, nationalID, createdAt: new Date().toISOString()},
});

export const updateName = (fullName: string) => ({type: "customer/updateName", payload: fullName});

