import {action, createAction} from "typesafe-actions";
import {CustomerModel} from "./customerType";

// export const add1 = (title: string) => action('todos/ADD', {id: '123', title, completed: false});
type CreateCustomer = {
    fullName: string,
    nationalID: string,
    createdAt: string
}

export const createCustomer = createAction('customer/createCustomer', (fullName: string, nationalID: string) => ({
    fullName: fullName,
    nationalID: nationalID,
    createdAt: new Date().toISOString()
}))<CreateCustomer>();

export const updateName = createAction('customer/updateName', (name: string) => ({
    name
}))();


