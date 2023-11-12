import React from 'react';
import {useSelector} from "react-redux";
import {CustomerModel} from "./customerSlice";

const Customer = () => {

    const customer = useSelector((store: any) => store.customer.fullName);
    return (
        <div>
            <h2>Welcome, {customer}</h2>
        </div>
    );
};

export default Customer;
